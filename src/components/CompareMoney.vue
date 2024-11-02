<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import type { Ref } from 'vue'
import IncomeChart from './IncomeChart.vue'

// データの定義
const age = ref(0)
const income = ref(0)
const submitted = ref(false)
const ageError: Ref<boolean> = ref(false)
const incomeError: Ref<boolean> = ref(false)
const incomeDistribution = ref<{
  [key: string]: {
    mean: number
    median: number
    percentiles: { [key: string]: number }
  }
}>({})

// 月収分布データを取得
onMounted(async () => {
  const response = await fetch('/incomeDistribution.json')
  incomeDistribution.value = await response.json()
})

// フォーム送信の処理
const compareMoneySubmit = (): void => {
  if (age.value > 0 && income.value > 0) {
    submitted.value = true
  }
}

// 年齢と月収のエラーチェック
watch(age, (newAge) => {
  ageError.value = newAge <= 0 || !Number.isInteger(newAge)
  submitted.value = false
})
watch(income, (newIncome) => {
  incomeError.value = newIncome <= 0 || !Number.isInteger(newIncome)
  submitted.value = false
})

// 年齢層の範囲を定義するオブジェクト
const ageGroups = {
  '20-24': { min: 20, max: 24 },
  '25-29': { min: 25, max: 29 },
  '30-34': { min: 30, max: 34 },
  '35-39': { min: 35, max: 39 },
  '40-44': { min: 40, max: 44 },
  '45-49': { min: 45, max: 49 },
  '50-54': { min: 50, max: 54 },
  '55-59': { min: 55, max: 59 },
  '60-64': { min: 60, max: 64 },
  '65-69': { min: 65, max: 69 },
  '70+': { min: 70, max: 100 } // 上限は適当に設定
}

// 年齢に基づいて年齢層を取得する関数
const getAgeGroup = (age: number): string | null => {
  for (const [group, range] of Object.entries(ageGroups)) {
    if (age >= range.min && age <= range.max) {
      return group
    }
  }
  return null // 該当なしの場合
}

// 月収が同年代で上位何％に位置するかを計算する関数
const getIncomeRank = (): number | null => {
  const ageGroup = getAgeGroup(age.value)
  if (!ageGroup || !incomeDistribution.value[ageGroup]) return null

  const { percentiles } = incomeDistribution.value[ageGroup]
  const incomeValue = income.value

  // 分布データに基づいて、入力された収入のランクを確認
  if (incomeValue >= percentiles['90']) return 10 // 上位10%
  if (incomeValue >= percentiles['75']) return 25 // 上位25%
  if (incomeValue >= percentiles['50']) return 50
  return -25
}
</script>

<template>
  <div style="width: 800px">
    <div id="explain">
      <h3>あなたの年齢と月収を入力して、分布を確認してみましょう。</h3>
      <h3>自分の月収が全体のどの範囲に位置するかがわかります。</h3>
      <h3>※令和元年賃金構造基本統計調査の結果の概況を参考に作成しております</h3>
    </div>

    <div id="main-contents">
      <h3>あなたはおいくつですか？</h3>
      <input type="number" v-model.number="age" placeholder="年齢を入力してください" />
      <p v-if="ageError" style="color: red">年齢は数値で入力してください。</p>
      <h3>あなたの月収はいくらですか？</h3>
      <input type="number" v-model.number="income" placeholder="月収を入力してください" />
      <p v-if="incomeError" style="color: red">月収は数値で入力してください。</p>
      <button class="dark-green-button" @click="compareMoneySubmit">自分の月収の分布をみる</button>

      <div id="moneyResults" v-if="submitted">
        <p>
          <span>{{ age }}歳で月収が{{ income }}万円だと、</span><br />
          <span v-if="getIncomeRank() === 10"
            >上位10%に入っています!! コングラッチュレーション!! 🎉</span
          >
          <span v-else-if="getIncomeRank() === 25"
            >おめでとうございます!! 上位25%の位置にいます!! 🎊</span
          >
          <span v-else-if="getIncomeRank() === 50"
            >上位50%に位置しています。頑張りが形になっていますね！💪</span
          >
          <span v-else-if="getIncomeRank() === -25"
            >現在は全体の下位25%以内の範囲ですが、<br />伸びしろがあります！応援しています！🚀</span
          >
          <span v-else>測定不可です</span>
        </p>
        <div class="chart-container" style="height: 40vh">
          <IncomeChart />
        </div>
      </div>

      <div v-else>
        <div class="example">
          入力例:23
          <br />
          <p>あなたは23歳です。</p>
          <br />
          <p>23歳で月収が25万だと上位25%です</p>
        </div>
      </div>
    </div>

    <div id="parents-references">
      <div id="references">
        <h3>参考文献</h3>
        <li>
          <a
            href="https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2019/index.html"
            target="_blank"
            class="reference-link"
          >
            令和元年賃金構造基本統計調査 結果の概況
          </a>
          <span class="accessDate">最終アクセス日:2024/11/2</span>
        </li>
      </div>
    </div>
  </div>
</template>

<style scoped>
#explain,
#main-contents,
#inquiry {
  border-bottom: 1px solid #cccccc;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.person-name {
  font-weight: bold;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div {
  padding: 20px;
}

input[type='number'] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
}

/* 濃いグリーンのボタンスタイル */
.dark-green-button {
  background-color: #4caf50; /* 濃いグリーン */
  color: white;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition:
    background-color 0.3s,
    box-shadow 0.3s;
}

.dark-green-button:hover {
  background-color: #3e8e41; /* ホバー時に暗いグリーンへ */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.dark-green-button:active {
  background-color: #366e35; /* クリック時さらに暗い色に */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.example {
  color: gray;
}

#moneyResults {
  background-color: #e8f5e9; /* 淡い緑色 */
  border: 2px solid #388e3c; /* 濃い緑色のボーダー */
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 影をつけて浮き出るように */
  margin-top: 20px;
  animation: fadeIn 0.5s ease; /* フェードインアニメーション */
}

#moneyResults p {
  font-size: 1.5rem; /* 大きめのフォントサイズ */
  font-weight: bold; /* 太字 */
  color: #2e7d32; /* 濃い緑色の文字 */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#parents-references {
  display: flex;

  justify-content: center;
}
#references {
  margin: 0 0 200px 0;
  text-align: left;
}

.reference-link {
  text-decoration: underline;
}

/* メディアクエリを追加 */
@media (max-width: 600px) {
  body {
    padding-bottom: 20px; /* フッターの下に余白を追加 */
  }
  div {
    padding: 10px;
    max-width: 100%; /* divの最大幅を100%に設定 */
    box-sizing: border-box; /* パディングとボーダーを幅に含める */
  }

  input[type='number'] {
    width: 100%;
    padding: 5px;
    margin: 5px 0;
    box-sizing: border-box;
  }

  button {
    padding: 10px 20px;
    font-size: 0.8rem;
  }

  #references {
    width: 100%;
  }
}
</style>
