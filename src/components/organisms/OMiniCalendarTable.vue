<script setup lang="ts">
import * as C from '@/calendar'
import ACircleButton from '@/components/atoms/ACircleButton.vue'
import { useDaySelector } from '@/composables/use-day-selector'
import { Calendar, useMonthCalendar } from '@/composables/use-month-calendar'
import { watch } from 'vue'

interface Props {
  calendar: Calendar
}
const props = defineProps<Props>()

interface Emits {
  (e: 'update:month', value: Date): void
  (e: 'update:selectedDay', value: Date): void
}
const emits = defineEmits<Emits>()

const { day: selectedDayLocal, selectDay: selectDayLocal } = useDaySelector(props.calendar.selectedDay.value)
const isSelectedLocal = (day: Date) => C.isSameDay(selectedDayLocal.value)(day)
watch(
  () => props.calendar.selectedDay.value,
  (day: Date) => {
    if (day !== selectedDayLocal.value) {
      selectDayLocal(props.calendar.selectedDay.value)
    }
  }
)
const { days, daysOfWeek, isSameMonth, isToday } = useMonthCalendar(props.calendar)

const handleOnClickDay = (day: Date) => {
  emits('update:month', day)
  if (isSelectedLocal(day)) {
    emits('update:selectedDay', day)
  } else {
    selectDayLocal(day)
  }
}
</script>

<template>
  <div class="o-mini-calendar-table">
    <a-circle-button
      v-for="(day, index) in daysOfWeek"
      :key="index"
      class="text"
      display="xs"
      muted
      disabled
      :tooltip-text="C.formatWeekShort(day)"
    >
      {{ C.formatWeekShort(day) }}
    </a-circle-button>
    <a-circle-button
      v-for="(day, index) in days"
      :key="index"
      display="xs"
      :muted="!isSameMonth(day)"
      :color="isToday(day) ? 'pastel' : isSelectedLocal(day) ? 'light' : 'default'"
      @click="handleOnClickDay(day)"
    >
      {{ C.formatDaySingle(day) }}
    </a-circle-button>
  </div>
</template>

<style scoped lang="scss">
.o-mini-calendar-table {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  place-items: center;
}
</style>
