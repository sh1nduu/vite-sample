<script setup lang="ts">
import { computed, inject } from 'vue'
import { addMonths, format, startOfMonth, subMonths } from 'date-fns'

import ACircleButton from '@/components/atoms/ACircleButton.vue'

interface Props {
  day: Date
}
const props = defineProps<Props>()

interface Emits {
  (e: 'update:day', value: Date): void
}
const emits = defineEmits<Emits>()

const month = computed(() => startOfMonth(props.day))
const monthText = computed(() => format(month.value, 'yyyy年 M月'))

const nextMonth = () => emits('update:day', addMonths(props.day, 1))
const prevMonth = () => emits('update:day', subMonths(props.day, 1))
</script>

<template>
  <div class="o-mini-calendar-header">
    <div class="month">
      {{ monthText }}
    </div>
    <div class="arrow-container">
      <a-circle-button
        class="arrow"
        tooltip-text="前月"
        @click="prevMonth"
      >
        &lt;
      </a-circle-button>
      <a-circle-button
        class="arrow"
        tooltip-text="翌月"
        @click="nextMonth"
      >
        &gt;
      </a-circle-button>
    </div>
  </div>
</template>

<style lang="scss">
.o-mini-calendar-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  font-size: 14px;
}

.month {
  padding-left: 10px;
}

.arrow-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 4px;

  &.arrow {
    transform: translateY(-2px);
  }
}
</style>
