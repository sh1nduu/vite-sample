<script setup lang="ts">
import OMiniCalendarHeader from '@/components/organisms/OMiniCalendarHeader.vue'
import OMiniCalendarTable from '@/components/organisms/OMiniCalendarTable.vue'
import { Calendar, useCalendar, useCalendarMutator } from '@/composables/use-month-calendar'
import { watch } from 'vue'

interface Props {
  calendar: Calendar
}
const props = defineProps<Props>()

const { calendar: calendarLocal } = useCalendar({
  today: props.calendar.today,
  selectedDay: props.calendar.selectedDay.value,
})
const { setMonth: setMonthGlobal, setSelectedDay: setSelectedDayGlobal } = useCalendarMutator(props.calendar)
const { setMonth: setMonthLocal, setSelectedDay: setSelectedDayLocal } = useCalendarMutator(calendarLocal)
watch(
  () => props.calendar.month,
  (dateRef) => setMonthLocal(dateRef.value)
)
watch(
  () => props.calendar.selectedDay,
  (dateRef) => setSelectedDayLocal(dateRef.value)
)
</script>

<template>
  <div class="o-mini-calendar">
    <o-mini-calendar-header
      :calendar="calendarLocal"
      @update:month="setMonthLocal"
    />
    <o-mini-calendar-table
      :calendar="calendarLocal"
      @update:month="setMonthGlobal"
      @update:selected-day="setSelectedDayGlobal"
    />
  </div>
</template>

<style scoped lang="scss"></style>
