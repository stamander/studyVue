<template>
  <header>
    <router-link to="/">
      <h1><img class="logo" src="/tenbin.png" alt="ロゴ" /> CompareGreatPerson</h1>
    </router-link>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  width: 50px; /* 画像の幅を指定 */
  height: auto; /* 高さを自動に設定してアスペクト比を保つ */
}
</style>
