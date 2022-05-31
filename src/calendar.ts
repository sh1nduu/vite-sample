import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfWeek,
  format as dfFormat,
  startOfMonth,
  startOfWeek,
  isSameDay as dfIsSameDay,
  getWeek,
} from 'date-fns'
import { ja } from 'date-fns/locale'

import { CALENDAR_MONTH_DAYS } from '@/constants'

export const startDayOfMonthCalendar = (day: Date) => startOfWeek(startOfMonth(day))

export const daysInMonthCalendar = (day: Date) => {
  const start = startDayOfMonthCalendar(day)
  return [...Array(CALENDAR_MONTH_DAYS)].map((_, i) => addDays(start, i))
}

export const daysOfWeek = (day: Date) => eachDayOfInterval({ start: startOfWeek(day), end: endOfWeek(day) })

export const isSameMonth = (base: Date) => (target: Date) => base.getMonth() === target.getMonth()

export const isSameDay = (base: Date) => (target: Date) => dfIsSameDay(base, target)

export const isFirstWeekOfMonth = (month: Date) => (day: Date) => getWeek(startOfMonth(month)) === getWeek(day)

export const isFirstDayOfNextMonth = (month: Date) => (day: Date) => isSameMonth(startOfMonth(addMonths(month, 1)))(day)

export const format = (pattern: string) => (day: Date) => dfFormat(day, pattern, { locale: ja })
export const formatWeekShort = format('E')
export const formatDaySingle = format('d')
