<script setup lang="ts">
import * as C from '@/calendar'
import MArrowButtons from '@/components/molecules/MArrowButtons.vue'
import { Calendar } from '@/composables/use-month-calendar'
import { addMonths, format, subMonths } from 'date-fns'
import { computed } from 'vue'

interface Props {
  calendar: Calendar
}
const props = defineProps<Props>()

interface Emits {
  (e: 'update:month', value: Date): void
}
const emits = defineEmits<Emits>()

const monthText = computed(() => format(props.calendar.month.value, 'yyyy年 M月'))

const nextMonth = () => emits('update:month', C.nextMonthFirstDay(props.calendar.month.value))
const prevMonth = () => emits('update:month', C.prevMonthFirstDay(props.calendar.month.value))
</script>

<template>
  <div class="o-mini-calendar-header">
    <div class="month">
      {{ monthText }}
    </div>
    <m-arrow-buttons
      class="arrow-container"
      :size="22"
      left-tooltip-text="前月"
      right-tooltip-text="翌月"
      @click-left="prevMonth"
      @click-right="nextMonth"
    />
  </div>
</template>

<style scoped lang="scss">
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
  margin-right: 8px;
}
</style>
