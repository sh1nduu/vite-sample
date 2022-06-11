<script setup lang="ts">
interface Props {
  text: string
}
defineProps<Props>()
interface Emits {
  (e: 'click'): void
}
const emits = defineEmits<Emits>()
</script>
<template>
  <div
    class="a-dropdown-item"
    @click.stop="emits('click')"
  >
    {{ text }}
  </div>
</template>

<style scoped lang="scss">
.a-dropdown-item {
  padding: 8px;

  &:hover {
    background-color: lightgray;
  }
}
</style>
