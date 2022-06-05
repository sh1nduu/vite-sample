<script setup lang="ts">
import ACircleButton from '@/components/atoms/ACircleButton.vue'

interface Props {
  value: unknown
  label: string
  subLabel?: string
  muted?: boolean
  active?: boolean
}
const props = defineProps<Props>()

interface Emits {
  (e: 'onClickLabel', value: unknown): void
}
const emits = defineEmits<Emits>()
</script>

<template>
  <div class="m-calendar-month-cell">
    <div
      v-show="subLabel"
      class="sub-label"
    >
      {{ subLabel }}
    </div>
    <div class="content">
      <a-circle-button
        class="label"
        :muted="muted"
        :color="active ? 'pastel' : 'default'"
        @click="emits('onClickLabel', value)"
      >
        {{ label }}
      </a-circle-button>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.m-calendar-month-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sub-label {
  font-size: 10px;
  color: gray;
  padding-top: 4px;
}

.label {
  padding-top: 4px;
  font-size: 14px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
