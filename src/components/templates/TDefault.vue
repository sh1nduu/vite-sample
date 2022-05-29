<script setup lang="ts">
</script>

<template>
  <div class="t-default">
    <header>
      <slot name="header" />
    </header>
    <main class="main">
      <aside class="menu">
        <slot name="menu" />
      </aside>
      <section class="content">
        <slot />
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.content {
  background-color: #2c3e50;
  width: calc(100% - 256px);
}
.menu {
  width: 256px;
  padding: 16px;
}
</style>