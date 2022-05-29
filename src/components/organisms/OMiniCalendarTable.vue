<script setup lang="ts">
import { computed } from 'vue'

import { format, isSameDay as dfIsSameDay } from 'date-fns'
import { ja } from 'date-fns/locale'

import * as C from '@/calendar'
import { useDaySelector } from '@/composables/use-day-selector'

interface Props {
  selectedDay: Date
  today: Date
}
const props = defineProps<Props>()

interface Emits {
  (e: 'update:selectedDay', value: Date): void
}
const emits = defineEmits<Emits>()

const { day: selectedDayLocal, selectDay: selectDayLocal } = useDaySelector(props.selectedDay)

const days = computed(() => C.daysInMonthCalendar(props.selectedDay))
const daysOfWeek = computed(() => C.daysOfWeek(props.selectedDay))

const formatDayOfWeek = (day: Date) => format(day, 'E', { locale: ja })
const dayNumber = (day: Date) => day.getDate()
const isSameMonth = C.isSameMonth(props.today)
const isSelectedLocal = (day: Date) => {
  const selected = selectedDayLocal // Should capture the ref, not it's value
  return C.isSameDay(selected.value)(day)
}
const isToday = C.isSameDay(props.today)
const handleOnClickDay = (day: Date) => (isSelectedLocal(day) ? emits('update:selectedDay', day) : selectDayLocal(day))
</script>

<template>
  <div class="m-mini-calendar-table">
    <div
      v-for="(day, index) in daysOfWeek"
      :key="index"
      class="day-of-week"
    >
      <div class="text mute-text">
        {{ formatDayOfWeek(day) }}
      </div>
    </div>
    <div
      v-for="(day, index) in days"
      :key="index"
      class="day"
      @click="handleOnClickDay(day)"
    >
      <div
        class="text"
        :class="{ 'mute-text': !isSameMonth(day), selected: isSelectedLocal(day), today: isToday(day) }"
      >
        {{ dayNumber(day) }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.m-mini-calendar-table {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  place-items: center;
  cursor: pointer;

  &:nth-child(-n + 7) {
    cursor: default;
  }
}

.cell {
  cursor: pointer;

  .text {
    font-size: 10px;
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    border-radius: 24px;
    padding-bottom: 4px;
    cursor: pointer;

    &.mute-text {
      color: gray;
    }
  }
}

.day-of-week {
  @extend .cell;
  cursor: default;
  .text {
    cursor: default;
  }
}

.day {
  @extend .cell;

  .text {
    &:hover {
      background-color: lightgray;
    }

    &.selected {
      background-color: skyblue;
    }

    &.today {
      color: white;
      background-color: blue;
    }
  }
}
</style>
