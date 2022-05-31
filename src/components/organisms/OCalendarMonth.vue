<script setup lang="ts">
import MCalendarMonthCell from '@/components/molecules/MCalendarMonthCell.vue'

import { useMonthCalendar } from '@/composables/use-month-calendar'
import * as C from '@/calendar'
import { isDate } from '@/type-guard'

interface Props {
  today: Date
  displayMonth: Date
}
const props = defineProps<Props>()

interface Emits {
  (e: 'onClickDayLabel', value: Date): void
}
const emits = defineEmits<Emits>()

const {
  days,
  isSameMonth,
  isToday,
  isFirstWeekOfMonth,
} = useMonthCalendar(props)

const handleOnClickDayLabel = (day: unknown) => {
  if (isDate(day)) {
    emits('onClickDayLabel', day)
  }
}

</script>

<template>
  <div class="o-calendar-month">
    <m-calendar-month-cell
      v-for="(day, index) in days"
      :key="index"
      class="cell"
      :show-week="isFirstWeekOfMonth(day)"
      :muted="!isSameMonth(day)"
      :label=" C.formatDaySingle(day)"
      :sub-label="isFirstWeekOfMonth(day) ? C.formatWeekShort(day) : undefined"
      :active="isToday(day)"
      :value="day"
      @on-click-label="handleOnClickDayLabel"
    >
      <div>
        Event {{ index }}
      </div>
    </m-calendar-month-cell>
  </div>
</template>

<style scoped lang="scss">
.o-calendar-month {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 1fr);
  place-items: center;
  border-left: 1px solid lightgray;
}

.cell {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;
}
</style>