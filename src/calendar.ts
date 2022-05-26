import { addDays, eachDayOfInterval, endOfWeek, startOfMonth, startOfWeek, isSameDay as dfIsSameDay } from 'date-fns'

import { CALENDAR_MONTH_DAYS } from '@/constants'

export const startDayOfMonthCalendar = (day: Date) => startOfMonth(startOfWeek(day))

export const daysInMonthCalendar = (day: Date) => {
  const start = startDayOfMonthCalendar(day)
  return [...Array(CALENDAR_MONTH_DAYS)].map((_, i) => addDays(start, i))
}

export const daysOfWeek = (day: Date) => eachDayOfInterval({ start: startOfWeek(day), end: endOfWeek(day) })

export const isSameMonth = (base: Date) => (target: Date) => base.getMonth() === target.getMonth()
export const isSameDay = (base: Date) => (target: Date) => dfIsSameDay(base, target)
