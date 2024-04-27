<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { ComputedRef } from 'vue'

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
</script>

<template>
  <div style="width: 800px">
    <h3>あなたの年齢を入れて偉人と出来事を比較してみましょう</h3>
    <p>自分と同じ年齢の時に、偉人が何をしていたのかがわかります</p>

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
    <h3><a href="https://forms.gle/Xkj7LLdowVv4mBc7A" target="_blank">お問い合わせはこちら</a></h3>
    <p>内容が間違っている、この人物を入れて欲しい等あればぜひお問い合わせフォームから</p>

  </div>
  <footer>
    <p>© 2024 stamander</p>
    <div id = "parents-references">
      <div id = "references">
        <p>参考文献</p>
        <li>スティーブ・ジョブズ死去にともない彼の人生を振り返るべく経歴をまとめてみた、最終アクセス日:20240427、https://wayohoo.com/article/3421</li>
        <li>偉人有名人年齢調査、最終アクセス日:20240427、https://ijin-age.info/</li>
      </div>
    </div>
  </footer>
</template>

<style scoped>
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
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin: 10px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

footer {
  border-top: #f8f9faf0 1px solid;
  color: #f8f9fa;
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

footer p {
  margin: 0;
}
</style>
