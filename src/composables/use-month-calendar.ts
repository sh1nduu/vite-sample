import * as C from '@/calendar'
import { computed, InjectionKey, ref, Ref, watch } from 'vue'

export function useCalendar(initial: { today: Ref<Date>; selectedDay: Date }) {
  const calendar = {
    today: initial.today,
    selectedDay: ref(initial.selectedDay),
    month: ref(initial.selectedDay),
  }
  watch(
    () => calendar.selectedDay,
    (dateRef) => (calendar.month.value = dateRef.value)
  )
  return {
    calendar,
  }
}
export type CalendarStore = ReturnType<typeof useCalendar>
export type Calendar = CalendarStore['calendar']
export const calendarKey: InjectionKey<CalendarStore> = Symbol('CalendarStore')

export function useCalendarMutator(calendar: Calendar) {
  const setSelectedDay = (day: Date) => (calendar.selectedDay.value = day)
  const setMonth = (day: Date) => (calendar.month.value = day)

  return {
    setSelectedDay,
    setMonth,
  }
}

export function useMonthCalendar(calendar: Calendar) {
  const days = computed(() => C.daysInMonthCalendar(calendar.month.value))
  const daysOfWeek = computed(() => C.daysOfWeek(calendar.month.value))

  const isSameMonth = (day: Date) => C.isSameMonth(calendar.month.value)(day)
  const isToday = (day: Date) => C.isSameDay(calendar.today.value)(day)
  const isFirstWeekOfMonth = (day: Date) => C.isFirstWeekOfMonth(calendar.month.value)(day)

  return {
    days,
    daysOfWeek,
    isSameMonth,
    isToday,
    isFirstWeekOfMonth,
  }
}
