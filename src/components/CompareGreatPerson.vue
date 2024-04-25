<script setup lang="ts">
import { ref, computed } from 'vue'

const title: string = 'Compare Great Person'
const age = ref(0)
const submitted = ref(false)
const achievements = ref([
  { name: 'ウォルトディズニー', age: 27, event: 'ミッキーマウスを完成させました' },
  { name: 'スティーブ・ジョブズ', age: 27, event: 'Appleを立ち上げました' }
  // 他の偉人の情報を追加できます
])

const filteredAchievements: ComputedRef <Array<{name: string, age: number, event: string} >> = computed(() => {
  return achievements.value.filter((a) => a.age === age.value)
})

const submit = (): void => {
  submitted.value = true
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <div>あなたはおいくつですか？</div>
    <input type="number" v-model.number="age" placeholder="年齢を入力してください" />
    <button @click="submit">偉人と比較する</button>
    <div v-if="submitted">
      あなたは{{ age }}歳です。
      <div v-for="(achievement, index) in filteredAchievements" :key="index">
        {{ achievement.age }}歳の時、{{ achievement.name }}は{{ achievement.event }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
