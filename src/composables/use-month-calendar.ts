import { format } from 'date-fns'

import * as C from '@/calendar'
import { computed } from 'vue'

export interface Props {
  today: Date
  displayMonth: Date
}

export function useMonthCalendar(props: Readonly<Props>) {
  const days = computed(() => C.daysInMonthCalendar(props.displayMonth))
  const daysOfWeek = computed(() => C.daysOfWeek(props.displayMonth))

  const isSameMonth = (day: Date) => C.isSameMonth(props.displayMonth)(day)
  const isToday = (day: Date) => C.isSameDay(props.today)(day)
  const isFirstWeekOfMonth = (day: Date) => C.isFirstWeekOfMonth(props.displayMonth)(day)
  return {
    days,
    daysOfWeek,
    isSameMonth,
    isToday,
    isFirstWeekOfMonth,
  }
}
