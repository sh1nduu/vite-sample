import { computed, InjectionKey, readonly, ref } from 'vue'

export function useDaySelector(initial: Date) {
  const _day = ref(initial)
  const day = readonly(_day)
  const selectDay = (day: Date) => (_day.value = day)
  const dayModel = computed({
    get: () => day.value,
    set: selectDay,
  })

  return { day, selectDay, dayModel }
}

export type DaySelectorStore = ReturnType<typeof useDaySelector>

export const daySelectorKey: InjectionKey<DaySelectorStore> = Symbol('DaySelectorStore')
