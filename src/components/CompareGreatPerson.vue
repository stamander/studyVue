<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import type { Ref, ComputedRef } from 'vue'

// データの定義
const age = ref(0)
const submitted = ref(false)
const achievements = ref<
  Array<{ id: number; name: string; achievements: Array<{ age: number; event: string }> }>
>([])

// 選択されたインデックスを保持するための変数
const activeIndex = ref<number | null>(null)

type Achievement = { id: number; name: string; age: number; event: string }

function shuffleArray(array: Achievement[]): Achievement[] {
  return array.sort(() => Math.random() - 0.5)
}

// セッションストレージからデータを取得する関数
function getStoredAchievements(ageValue: string, today: string): Achievement[] | null {
  const storedDate = sessionStorage.getItem(`shuffleDate-${ageValue}`)
  const storedAchievements = sessionStorage.getItem(`shuffledAchievements-${ageValue}`)

  if (storedDate === today && storedAchievements) {
    return JSON.parse(storedAchievements)
  }
  return null
}

// セッションストレージにデータを保存する関数
function storeAchievements(ageValue: string, today: string, achievements: Achievement[]) {
  sessionStorage.setItem(`shuffleDate-${ageValue}`, today)
  sessionStorage.setItem(`shuffledAchievements-${ageValue}`, JSON.stringify(achievements))
}

onMounted(async () => {
  const response = await fetch('/greatPerson.json')
  achievements.value = await response.json()
})

// フィルタリングされた業績を計算
const filteredAchievements: ComputedRef<Achievement[]> = computed(() => {
  const today = new Date().toISOString().split('T')[0] // 今日の日付を取得
  const ageValue = age.value.toString() // 年齢を文字列に変換

  // セッションストレージからデータを取得
  const storedAchievements = getStoredAchievements(ageValue, today)

  if (storedAchievements) {
    return storedAchievements
  } else {
    // 新しいシャッフル結果を生成
    const newAchievements = achievements.value
      .flatMap((person) =>
        person.achievements.map((achievement) => ({
          id: person.id,
          name: person.name,
          age: achievement.age,
          event: achievement.event
        }))
      )
      .filter((a) => a.age === age.value)

    const shuffledAchievements = shuffleArray(newAchievements).slice(0, 3) // シャッフルして最初の3つを選択

    // 新しいシャッフル結果と日付をセッションストレージに保存
    storeAchievements(ageValue, today, shuffledAchievements)

    return shuffledAchievements
  }
})

// フォーム送信の処理
const compareGreatPersonSubmit = (): void => {
  submitted.value = true
}

// 年齢の変更を監視し、エラーメッセージを表示
watch(age, () => {
  submitted.value = false
})

const ageError: Ref<boolean> = ref(false)

watch(age, (newAge) => {
  ageError.value = newAge <= 0 || !Number.isInteger(newAge)
})

// イベントの表示・非表示を切り替えるためのメソッド
const toggleEvent = (index: number): void => {
  activeIndex.value = activeIndex.value === index ? null : index
}
const referencesSite: Ref<Array<{ link: string; text: string; accessDate: string }>> = ref([
  {
    link: 'https://wayohoo.com/article/3421',
    text: 'スティーブ・ジョブズ死去にともない彼の人生を振り返るべく経歴をまとめてみた',
    accessDate: '2024年04月27日'
  },
  {
    link: 'https://ijin-age.info/',
    text: '偉人有名人年齢調査',
    accessDate: '2024年04月27日'
  },
  {
    link: 'https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%BC%E3%83%9E%E3%82%B9%E3%83%BB%E3%82%A8%E3%82%B8%E3%82%BD%E3%83%B3',
    text: 'トーマス・エジソン - Wikipedia',
    accessDate: '2024年05月08日'
  },
  {
    link: 'https://ja.wikipedia.org/wiki/%E3%82%A6%E3%82%A9%E3%83%AB%E3%83%88%E3%83%BB%E3%83%87%E3%82%A3%E3%82%BA%E3%83%8B%E3%83%BC',
    text: 'ウォルトディズニー - Wikipedia',
    accessDate: '2024年05月19日'
  },
  {
    link: 'https://ja.wikipedia.org/wiki/%E7%B9%94%E7%94%B0%E4%BF%A1%E9%95%B7',
    text: '織田信長 - Wikipedia',
    accessDate: '2024年05月21日'
  },
  {
    link: 'https://ja.wikipedia.org/wiki/%E8%B1%8A%E8%87%A3%E7%A7%80%E5%90%89',
    text: '豊臣秀吉 - Wikipedia',
    accessDate: '2024年05月21日'
  },
  {
    link: 'https://ja.wikipedia.org/wiki/%E5%BE%B3%E5%B7%9D%E5%AE%B6%E5%BA%B7',
    text: '徳川家康 - Wikipedia',
    accessDate: '2024年05月21日'
  },
  {
    link: 'https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%BC%E3%83%9E%E3%82%B9%E3%83%BB%E3%82%A8%E3%82%B8%E3%82%BD%E3%83%B3',
    text: 'エジソン - Wikipedia',
    accessDate: '2024年05月21日'
  },
  {
    link: 'https://ja.wikipedia.org/wiki/%E3%82%A8%E3%82%A4%E3%83%96%E3%83%A9%E3%83%8F%E3%83%A0%E3%83%BB%E3%83%AA%E3%83%B3%E3%82%AB%E3%83%BC%E3%83%B3',
    text: 'エイブラハム・リンカーン - Wikipedia',
    accessDate: '2024年05月21日'
  },
  {
    link: 'https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%8D%E3%83%AB%E3%83%BB%E3%82%B5%E3%83%B3%E3%83%80%E3%83%BC%E3%82%B9',
    text: 'カーネル・サンダース - Wikipedia',
    accessDate: '2024年05月21日'
  },
  {
    link: 'https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%86%E3%82%A3%E3%83%BC%E3%83%96%E3%83%BB%E3%82%B8%E3%83%A7%E3%83%96%E3%82%BA',
    text: 'スティーブ・ジョブズ - Wikipedia',
    accessDate: '2024年05月21日'
  },
  {
    link: 'https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%AB%E3%83%99%E3%83%AB%E3%83%88%E3%83%BB%E3%82%A2%E3%82%A4%E3%83%B3%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%A4%E3%83%B3',
    text: 'アルベルト・アインシュタイン - Wikipedia',
    accessDate: '2024年05月21日'
  }
])

const referencesBook: Ref<Array<{ text: string; writer: string; publicationDate: string }>> = ref([
  {
    text: '世界の偉人伝未来を作った10人',
    writer: '西東社',
    publicationDate: '2016年06月14日'
  },
  {
    text: '創造の狂気',
    writer: 'ニール・ゲイブラー',
    publicationDate: '2017年06月01日'
  },
  {
    text: 'コミック版 世界の伝記 ウォルトディズニー',
    writer: '中 祥人',
    publicationDate: '2013年03月'
  }
])
</script>

<template>
  <div style="width: 800px; margin: auto">
    <div id="explain">
      <h3>あなたの年齢を入れて有名人と出来事を比較してみましょう。</h3>
      <h3>自分と同じ年齢の時に、有名人が何をしていたのかがわかります。</h3>
    </div>

    <div id="main-contents">
      <h3>あなたはおいくつですか？</h3>
      <input type="number" v-model.number="age" placeholder="年齢を入力してください" />
      <p v-if="ageError" style="color: red">年齢は数値で入力してください。</p>
      <button class="dark-green-button" @click="compareGreatPersonSubmit">偉人と比較する</button>

      <div id="results" v-if="submitted">
        あなたは{{ age }}歳です。
        <div v-for="(achievement, index) in filteredAchievements" :key="index">
          <button class="person-name light-green-button" @click="toggleEvent(index)">
            {{ achievement.name }}
          </button>
          <div v-if="activeIndex === index">
            {{ achievement.event }}
          </div>
        </div>
        内容は毎日変わります！明日もチェックしてみてください！
      </div>

      <div v-else>
        <div class="example">
          入力例:23
          <br />
          <p>あなたは23歳です。</p>
          <br />
          <p>スティーブ・ジョブズ:アップルの次世代コンピュータ、Lisaの開発をリードしました。</p>
        </div>
      </div>
    </div>

    <div id="parents-references">
      <div id="references">
        <h3>参考文献</h3>
        <li v-for="(reference, index) in referencesSite" :key="index">
          <a :href="reference.link" target="_blank" class="reference-link">
            {{ reference.text }}
          </a>
          <span class="accessDate">最終アクセス日:{{ reference.accessDate }}</span>
        </li>
        <li v-for="(reference, index) in referencesBook" :key="index">
          {{ reference.text }},
          <span class="writer">{{ reference.writer }},</span>
          <span class="publicDate">出版日:{{ reference.publicationDate }}</span>
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

/* 薄いグリーンのボタンスタイル */
.light-green-button {
  background-color: white; /* 薄いグリーン */
  color: #4caf50;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid #81c784; /* 薄い緑色のボーダー */
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition:
    background-color 0.3s,
    box-shadow 0.3s;
}

.light-green-button:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.light-green-button:active {
  background-color: #66bb6a; /* クリック時さらに濃い色に */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.example {
  color: gray;
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
