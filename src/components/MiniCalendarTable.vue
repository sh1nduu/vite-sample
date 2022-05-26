<script setup lang="ts">
import { ref, inject, computed } from 'vue'

import { format, isSameDay as dfIsSameDay } from 'date-fns'
import { ja } from 'date-fns/locale'

import * as C from '@/calendar'
import { daySelectorKey, DaySelectorStore, todaySelectorKey, useDaySelector } from '@/composables/use-day-selector'

const { selectedDay, selectDay } = inject(daySelectorKey) as DaySelectorStore
const { selectedDay: today } = inject(todaySelectorKey) as DaySelectorStore
const { selectedDay: selectedDayLocal, selectDay: selectDayLocal } = useDaySelector(selectedDay.value)

const days = computed(() => C.daysInMonthCalendar(selectedDay.value))
const daysOfWeek = computed(() => C.daysOfWeek(selectedDay.value))

const formatDayOfWeek = (day: Date) => format(day, 'E', { locale: ja })
const dayNumber = (day: Date) => day.getDate()
const isSameMonth = C.isSameMonth(today.value)
const isSelectedLocal = (day: Date) => {
  const selected = selectedDayLocal // Should capture the ref, not it's value
  return C.isSameDay(selected.value)(day)
}
const isToday = C.isSameDay(today.value)
const handleOnClickDay = (day: Date) => (isSelectedLocal(day) ? selectDay(day) : selectDayLocal(day))
</script>

<template>
  <div class="table">
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
.table {
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
