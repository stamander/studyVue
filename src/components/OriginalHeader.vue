<template>
  <header>
    <img class="logo" src="/tenbin.png" alt="ロゴ" />
    <router-link to="/">
      <h2>偉人と比較</h2>
    </router-link>
    <router-link to="/compareMoney">
      <h2>月収分布</h2>
    </router-link>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
}

.logo {
  width: 50px; /* 画像の幅を指定 */
  height: auto; /* 高さを自動に設定してアスペクト比を保つ */
}
</style>
