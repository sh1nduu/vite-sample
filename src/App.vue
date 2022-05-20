<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue'
import CountUpButton from '@/components/CountUpButton.vue'
import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <div class="header">
    <div class="title">
      Calendar
    </div>
  </div>
  <div class="content">
    <side-bar class="side-bar" />
    <main class="main">
      <img
        alt="Vue logo"
        src="./assets/logo.png"
      >
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      <count-up-button />
    </main>
  </div>
</template>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  height: 64px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #cbcbcb;

  .title {
    font-size: 22px;
  }
}
.content {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.main {
  background-color: #2c3e50;
  width: calc(100% - 256px);
}
.side-bar {
  width: 256px;
  padding: 16px;
}
</style>
