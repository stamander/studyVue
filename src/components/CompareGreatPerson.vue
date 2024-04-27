<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import type { Ref, ComputedRef } from 'vue'

const age = ref(0)
const submitted = ref(false)
const achievements = ref<
  Array<{ name: string; achievements: Array<{ age: number; event: string }> }>
>([])

onMounted(async () => {
  const response = await fetch('/greatPerson.json')
  achievements.value = await response.json()
})

const filteredAchievements: ComputedRef<Array<{ name: string; age: number; event: string }>> =
  computed(() => {
    return achievements.value
      .flatMap((person) =>
        person.achievements.map((achievement) => ({
          name: person.name,
          age: achievement.age,
          event: achievement.event
        }))
      )
      .filter((a) => a.age === age.value)
  })

const submit = (): void => {
  submitted.value = true
}

watch(age, () => {
  submitted.value = false
})

const references: Ref<Array<{ link: string; text: string; accessDate: string }>> = ref([
  {
    link: 'https://wayohoo.com/article/3421',
    text: 'スティーブ・ジョブズ死去にともない彼の人生を振り返るべく経歴をまとめてみた',
    accessDate: '2024年04月27日'
  },
  {
    link: 'https://ijin-age.info/',
    text: '偉人有名人年齢調査',
    accessDate: '2024年04月27日'
  }
  // 他の参考文献を追加...
])
</script>

<template>
  <div style="width: 800px">
    <div id="explain">
      <h3>あなたの年齢を入れて偉人と出来事を比較してみましょう。</h3>
      <h3>自分と同じ年齢の時に、偉人が何をしていたのかがわかります。</h3>
    </div>

    <div id="main-contents">
      <h3>あなたはおいくつですか？</h3>
      <input type="number" v-model.number="age" placeholder="年齢を入力してください" />
      <button @click="submit">偉人と比較する</button>
      <div id="results" v-if="submitted">
        あなたは{{ age }}歳です。
        <div v-for="(achievement, index) in filteredAchievements" :key="index">
          {{ achievement.name }}は{{ achievement.event }}
        </div>
      </div>
    </div>

    <div id="inquiry">
      <h3>
        <a
          href="https://forms.gle/Xkj7LLdowVv4mBc7A"
          target="_blank"
          style="text-decoration: underline"
          >お問い合わせはこちら</a
        >
      </h3>
      <p>
        内容が間違っている、この人物を入れて欲しい等あればぜひお問い合わせフォームからお願いいたします。
      </p>
    </div>
  </div>
  <footer>
    <p>© 2024 stamander</p>
    <div id="parents-references">
      <div id="references">
        <p>参考文献</p>
        <li v-for="(reference, index) in references" :key="index">
          <a :href="reference.link" target="_blank" class="reference-link">
            {{ reference.text }}
          </a>
          <span class="access-date">最終アクセス日:{{ reference.accessDate }}</span>
        </li>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#explain,
#main-contents {
  border-bottom: 1px solid #cccccc;
  padding-bottom: 20px;
  margin-bottom: 20px;
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

button {
  background-color: #4caf50; /* 鮮やかなグリーン */
  color: white;
  padding: 15px 30px; /* 適切なパディングでボタンを大きく表示 */
  font-size: 1rem; /* 読みやすいフォントサイズ */
  font-weight: bold; /* ボタンのテキストを強調 */
  border: none; /* 枠線を取り除く */
  border-radius: 5px; /* やや丸みを帯びたボーダー */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* ソフトなシャドウで立体感を演出 */
  transition:
    background-color 0.3s,
    box-shadow 0.3s; /* スムーズな遷移効果 */
}

button:hover {
  background-color: #3e8e41; /* ホバー時に暗いグリーンへ変化 */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* シャドウを強調してクリック可能なインタラクションを示す */
}

button:active {
  background-color: #366e35; /* クリック時にさらに暗い色へ */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* クリックされたときの押し込まれるような効果 */
}

footer {
  border-top: black 1px solid;
  --color-text-black: var(--vt-c-black);
  text-align: center;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

#parents-references {
  display: flex;

  justify-content: center;
}
#references {
  width: 50%;
  margin: auto 0;
  text-align: left;
}

.reference-link {
  text-decoration: underline;
}

footer p {
  margin: 0;
}
</style>
