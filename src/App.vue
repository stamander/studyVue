<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>

  <RouterView />
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
      <a
      href="/privacyPolicy/"
      target="_blank"
      style="text-decoration: underline"
      >プライバシーポリシー</a
      >
    </p>
    <p>© 2024 atsushi.iida</p>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

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

@media (min-width: 1024px) {
  header {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
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
