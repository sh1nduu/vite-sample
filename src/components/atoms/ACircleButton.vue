<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  display?: 'xs' | 'sm' | 'lg'
  muted?: boolean
  disabled?: boolean
  color?: 'default' | 'light' | 'pastel'
  tooltipText?: string
}
const props = defineProps<Props>()
const buttonCss = computed(() => ({
  disabled: props.disabled,
}))
const textCss = computed(() => ({
  xs: props.display === 'xs',
  sm: (props.display ?? 'sm') === 'sm',
  lg: props.display === 'lg',
  muted: props.muted,
  disabled: props.disabled,
  'c-default': (props.color ?? 'default') === 'default',
  'c-light': props.color === 'light',
  'c-pastel': props.color === 'pastel',
}))
</script>

<template>
  <div
    class="a-circle-button a-tooltip-container"
    :class="buttonCss"
  >
    <div
      class="text"
      :class="textCss"
    >
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

.a-circle-button {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &.disabled {
    cursor: default;
  }

  &:not(.disabled):hover .text.c-default {
    background-color: lightgray;
  }
}

.text {
  text-align: center;
  user-select: none;
  border-radius: 100%;

  &.xs {
    height: 24px;
    width: 24px;
    line-height: 24px;
    font-size: 10px;
  }

  &.sm {
    height: 24px;
    width: 24px;
    line-height: 24px;
    font-size: 14px;
  }

  &.muted {
    color: gray;
  }

  &.disabled {
    cursor: default;
  }

  &.c-light {
    background-color: skyblue;
  }

  &.c-pastel {
    color: white;
    background-color: blue;
  }
}
</style>
