<script setup lang="ts"></script>

<template>
  <div class="t-default">
    <header class="header">
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
$header-height: 64px;
$menu-width: 256px;

.t-default {
  height: 100%;
}

.header {
  height: $header-height;
}

.main {
  display: flex;
  flex-direction: row;
  height: calc(100% - $header-height);
}
.content {
  width: calc(100% - $menu-width);
  height: 100%;
}
.menu {
  width: $menu-width;
  height: 100%;
  padding: 16px;
}
</style>
