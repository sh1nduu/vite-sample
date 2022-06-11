<script setup lang="ts">
import AButton from '@/components/atoms/AButton.vue'
import { ref } from 'vue'
import MenuDownIcon from 'vue-material-design-icons/MenuDown.vue'
interface Props {
  text: string
}
defineProps<Props>()

const open = ref(false)
const toggle = () => (open.value = !open.value)
const close = () => (open.value = false)
</script>
<template>
  <a-button
    v-click-outside="close"
    class="a-dropdown"
    @click="toggle"
  >
    <span class="text">
      {{ text }}
    </span>
    <menu-down-icon
      class="menu-down-icon"
      :size="16"
    />
    <div
      v-if="open"
      class="menu"
    >
      <slot />
    </div>
  </a-button>
</template>

<style scoped lang="scss">
.a-dropdown {
  vertical-align: middle;
  padding-right: 8px;
  position: relative;
}

.menu {
  min-width: 200%;
  position: absolute;
  padding: 8px 0;
  font-size: 14px;
  top: 120%;
  left: -100%;
  background-color: white;
  z-index: 1000;
  border-radius: 2%;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2), -2px 2px 8px rgba(0, 0, 0, 0.2);
}

.menu-down-icon {
  display: inline-block;
  transform: translateY(16%);
}

.text {
  margin-right: 8px;
}
</style>
