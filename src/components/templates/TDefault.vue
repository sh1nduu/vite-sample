<script setup lang="ts">
interface Props {
  isOpenMenu: boolean
}
defineProps<Props>()
</script>

<template>
  <div class="t-default">
    <header class="header">
      <slot name="header" />
    </header>
    <main class="main">
      <aside
        class="menu"
        :class="{ close: !isOpenMenu }"
      >
        <slot name="menu" />
      </aside>
      <section
        class="content"
        :class="{ full: !isOpenMenu }"
      >
        <slot />
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
$header-height: 64px;
$menu-width: 256px;
$transition-time: 0.3s;

.t-default {
  height: 100%;
}

.header {
  height: $header-height;
}

.main {
  position: relative;
  height: calc(100% - $header-height);
}

.content {
  width: calc(100% - $menu-width);
  height: 100%;
  position: absolute;
  left: $menu-width;
  transition: all $transition-time ease-in-out;

  &.full {
    left: 0px;
    width: 100%;
  }
}
.menu {
  position: absolute;
  left: 0px;
  width: $menu-width;
  height: 100%;
  padding: 16px;
  transition: all $transition-time ease-in-out;

  &.close {
    left: -$menu-width;
  }
}
</style>
