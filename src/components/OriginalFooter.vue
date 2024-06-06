<template>
  <footer>
    <div>
      <h4>ライセンス</h4>
      <p>
        この文書の一部にはWikipediaのコンテンツを含んでおり、これは
        <a
          href="https://creativecommons.org/licenses/by-sa/3.0/"
          target="_blank"
          class="reference-link"
          >CC BY-SA 3.0</a
        >
        ライセンスの下で利用できます。他の参考文献からの情報については、各文献の著作権に従ってください。
      </p>
    </div>
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
    <p>© 2024 great-compare.net</p>
  </footer>
</template>

<style scoped>
footer {
  border-top: black 1px solid;
  --color-text-black: var(--vt-c-black);
  text-align: center;
  padding: 5px;
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
    padding: 5px;
    border-top: black 1px solid;
    text-align: center;
    font-size: 10px;
  }
}
</style>
