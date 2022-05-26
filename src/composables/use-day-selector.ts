import { InjectionKey, readonly, ref } from 'vue'

export function useDaySelector(initial: Date) {
  const _selectedDay = ref(initial)
  const selectedDay = readonly(_selectedDay)
  const selectDay = (day: Date) => (_selectedDay.value = day)
  return { selectedDay, selectDay }
}

export type DaySelectorStore = ReturnType<typeof useDaySelector>

export const daySelectorKey: InjectionKey<DaySelectorStore> = Symbol('DaySelectorStore')
export const todaySelectorKey: InjectionKey<DaySelectorStore> = Symbol('TodaySelectorStore')
