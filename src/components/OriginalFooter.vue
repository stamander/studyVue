<template>
  <footer>
    <p>
      <a
        href="https://forms.gle/Xkj7LLdowVv4mBc7A"
        target="_blank"
        style="text-decoration: underline"
        >お問い合わせ</a
      >
    </p>
    <p>
      <a href="/privacyPolicy/" target="_blank" style="text-decoration: underline"
        >プライバシーポリシー</a
      >
    </p>
    <p>© 2024 atsushi.iida</p>
  </footer>
</template>

<style scoped>
footer {
  border-top: black 1px solid;
  --color-text-black: var(--vt-c-black);
  text-align: center;
  padding: 20px;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  position: fixed;
}

footer p {
  margin: 0;
}

@media (max-width: 600px) {
  footer {
    position: relative; /* 固定位置から相対位置へ変更 */
    width: 100%;
    height: auto; /* フッターの高さを自動に設定 */
    padding: 20px;
    border-top: black 1px solid;
    text-align: center;
  }
}
</style>
