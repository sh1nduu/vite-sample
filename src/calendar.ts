import { CALENDAR_MONTH_DAYS } from '@/constants'
import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfWeek,
  format as dfFormat,
  getWeek,
  isSameDay as dfIsSameDay,
  startOfMonth as dfStartOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns'
import { ja } from 'date-fns/locale'

export const startDayOfMonthCalendar = (day: Date) => startOfWeek(dfStartOfMonth(day))

export const daysInMonthCalendar = (day: Date) => {
  const start = startDayOfMonthCalendar(day)
  return [...Array(CALENDAR_MONTH_DAYS)].map((_, i) => addDays(start, i))
}

export const daysOfWeek = (day: Date) => eachDayOfInterval({ start: startOfWeek(day), end: endOfWeek(day) })

export const isSameMonth = (base: Date) => (target: Date) => base.getMonth() === target.getMonth()

export const isSameDay = (base: Date) => (target: Date) => dfIsSameDay(base, target)

export const isFirstWeekOfMonth = (month: Date) => (day: Date) => getWeek(dfStartOfMonth(month)) === getWeek(day)

export const isFirstDayOfNextMonth = (month: Date) => (day: Date) =>
  isSameMonth(dfStartOfMonth(addMonths(month, 1)))(day)

export const firstDayOfMonth = (month: Date) => dfStartOfMonth(month)
export const nextMonthFirstDay = (month: Date) => dfStartOfMonth(addMonths(month, 1))
export const prevMonthFirstDay = (month: Date) => dfStartOfMonth(subMonths(month, 1))

export const format = (pattern: string) => (day: Date) => dfFormat(day, pattern, { locale: ja })
export const formatWeekShort = format('E')
export const formatWeekLong = format('EEEE')
export const formatDaySingle = format('d')
export const formatDayLong = format('yyyy年 M月 d日 (EEEE)')
export const formatMonth = format('yyyy年 M月')
