<script setup lang="ts">
const goToDashboard = () => {
  // ユーザーをダッシュボードやホームページにリダイレクト
  window.location.href = 'https://line.me/R/ti/p/%40242hetfw'
}
</script>

<template>
  <div class="success-page">
    <h1>サブスクリプションの登録が完了しました 🎉</h1>
    <p>ご登録ありがとうございます！</p>
    <p>これからサービスを存分にお楽しみください。</p>
    <button @click="goToDashboard">LINEでやり取りを続ける</button>
  </div>
</template>

<style scoped>
.success-page {
  text-align: center;
  margin-top: 50px;
  background-color: #f6fff5; /* 優しい緑の背景 */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 50px auto;
}

.success-page h1 {
  font-size: 2.5rem;
  color: #2e7d32; /* 成功を表す濃い緑 */
  margin-bottom: 20px;
}

.success-page p {
  font-size: 1.2rem;
  margin: 10px 0;
  color: #4caf50; /* 明るい緑の文字色 */
}

.success-page button {
  margin-top: 20px;
  padding: 12px 25px;
  font-size: 1rem;
  color: white;
  background-color: #4caf50; /* 明るい緑 */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.success-page button:hover {
  background-color: #388e3c; /* ボタンの濃い緑色 */
}
</style>
