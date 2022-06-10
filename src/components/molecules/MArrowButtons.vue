<script setup lang="ts">
import ACircleButton from '@/components/atoms/ACircleButton.vue'
import ChevronLeftIcon from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'

interface Props {
  size: number
  leftTooltipText?: string
  rightTooltipText?: string
}
defineProps<Props>()

interface Emits {
  (e: 'clickLeft'): void
  (e: 'clickRight'): void
}

const emits = defineEmits<Emits>()
const handleClickLeft = () => emits('clickLeft')
const handleClickRight = () => emits('clickRight')
</script>

<template>
  <div class="item m-arrows">
    <a-circle-button
      class="left"
      :tooltip-text="leftTooltipText"
      @click="handleClickLeft"
    >
      <chevron-left-icon :size="size" />
    </a-circle-button>
    <a-circle-button
      :tooltip-text="rightTooltipText"
      @click="handleClickRight"
    >
      <chevron-right-icon :size="size" />
    </a-circle-button>
  </div>
</template>

<style scoped lang="scss">
.m-arrows {
  display: flex;
  justify-content: space-around;

  .left {
    margin-right: 16%;
  }
}
</style>
