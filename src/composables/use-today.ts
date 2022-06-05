import { InjectionKey, readonly, ref } from 'vue'

const today = ref(new Date())
let timerId: number | undefined = undefined

export function useToday() {
  if (timerId === undefined) {
    timerId = window.setInterval(() => {
      today.value = new Date()
    }, 60 * 1000)
  }
  return readonly(today)
}

export type TodayStore = ReturnType<typeof useToday>
export const todaySelectorKey: InjectionKey<TodayStore> = Symbol('TodayStore')
