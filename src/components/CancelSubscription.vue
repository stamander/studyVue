<script setup lang="ts">
const goToSupport = () => {
  // お問い合わせフォームへのリダイレクト
  window.location.href =
    'https://docs.google.com/forms/d/11GgAo484B1QuNSt-b8Rb6CFhqf23H2PUQhMSvjhYsmQ/viewform'
}

const goBackToLine = () => {
  // LINE画面にリダイレクト
  window.location.href = 'https://line.me/R/ti/p/%40242hetfw'
}
</script>

<template>
  <div class="cancel-page">
    <h1>サブスクリプションの登録をキャンセルしました</h1>
    <p>ご利用を検討いただきありがとうございます。</p>
    <p>またの機会がございましたら、ぜひよろしくお願いいたします。</p>
    <div class="button-group">
      <button @click="goToSupport">お問い合わせフォーム</button>
      <button @click="goBackToLine">Lineでやり取りを続ける</button>
    </div>
  </div>
</template>

<style scoped>
.cancel-page {
  text-align: center;
  margin-top: 50px;
  background-color: #fff8f8; /* 優しい赤の背景 */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 50px auto;
}

.cancel-page h1 {
  font-size: 2.5rem;
  color: #d32f2f; /* キャンセルを表す赤 */
  margin-bottom: 20px;
}

.cancel-page p {
  font-size: 1.2rem;
  margin: 10px 0;
  color: #f44336; /* 明るい赤の文字色 */
}

.cancel-page .button-group {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.cancel-page button {
  padding: 12px 25px;
  font-size: 1rem;
  color: white;
  background-color: #f44336; /* 明るい赤 */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.cancel-page button:hover {
  background-color: #c62828; /* ボタンの濃い赤色 */
}
</style>
