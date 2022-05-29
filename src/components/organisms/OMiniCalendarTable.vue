<script setup lang="ts">
import { computed } from 'vue'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

import ACircleButton from '@/components/atoms/ACircleButton.vue'

import * as C from '@/calendar'
import { useDaySelector } from '@/composables/use-day-selector'

interface Props {
  selectedDay: Date
  today: Date
  displayMonth: Date
}
const props = defineProps<Props>()

interface Emits {
  (e: 'update:selectedDay', value: Date): void
  (e: 'update:displayMonth', value: Date): void
}
const emits = defineEmits<Emits>()

const { day: selectedDayLocal, selectDay: selectDayLocal } = useDaySelector(props.selectedDay)

const days = computed(() => C.daysInMonthCalendar(props.displayMonth))
const daysOfWeek = computed(() => C.daysOfWeek(props.displayMonth))

const formatDayOfWeek = (day: Date, pattern: string) => format(day, pattern, { locale: ja })
const formatDay = (day: Date) => day.getDate()
const isSameMonth = (day: Date) => {
  // Should capture the props, not it's value
  return C.isSameMonth(props.displayMonth)(day)
}
const isSelectedLocal = (day: Date) => {
  // Should capture the ref, not it's value
  return C.isSameDay(selectedDayLocal.value)(day)
}
const isToday = C.isSameDay(props.today)
const handleOnClickDay = (day: Date) => {
  if (!isSameMonth(day)) {
    emits('update:displayMonth', day)
  }
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
      :tooltip-text="formatDayOfWeek(day, 'EEEE')"
    >
      {{ formatDayOfWeek(day, 'E') }}
    </a-circle-button>
    <a-circle-button
      v-for="(day, index) in days"
      :key="index"
      display="xs"
      :muted="!isSameMonth(day)"
      :color="isToday(day) ? 'pastel' : isSelectedLocal(day) ? 'light' : 'default'"
      @click="handleOnClickDay(day)"
    >
      {{ formatDay(day) }}
    </a-circle-button>
  </div>
</template>

<style lang="scss">
.o-mini-calendar-table {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  place-items: center;
}
</style>
