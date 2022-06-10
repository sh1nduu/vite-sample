<script setup lang="ts">
interface Props {
  tooltipText?: string
}
defineProps<Props>()
</script>

<template>
  <div
    role="button"
    class="a-button a-tooltip-container"
  >
    <div>
      <slot />
    </div>
    <div
      v-if="tooltipText"
      class="a-tooltip"
    >
      {{ tooltipText }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/tooltip';

.a-button {
  font-size: 14px;
  white-space: nowrap;
  padding: 8px 16px;
  border-radius: 10%;
  border: 1px solid lightgray;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
}
</style>
