<script setup lang="ts">
import '@/assets/scss/base.scss'
import PHome from '@/components/pages/PHome.vue'
import { daySelectorKey, useDaySelector } from '@/composables/use-day-selector'
import { calendarKey, useCalendar } from '@/composables/use-month-calendar'
import { todaySelectorKey, useToday } from '@/composables/use-today'
import { isOpenMenuKey, useIsOpenMenu } from '@/composables/use-is-open-menu'
import { provide } from 'vue'

const today = useToday()
provide(todaySelectorKey, today)

provide(
  calendarKey,
  useCalendar({
    today,
    selectedDay: new Date(2022, 4, 10),
  })
)
provide(daySelectorKey, useDaySelector(new Date(2022, 4, 10)))
provide(isOpenMenuKey, useIsOpenMenu(true))
</script>

<template>
  <p-home />
</template>
