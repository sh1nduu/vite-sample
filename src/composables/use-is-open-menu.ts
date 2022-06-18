import { InjectionKey, readonly, ref } from 'vue'

export function useIsOpenMenu(open: boolean) {
  const isOpenMenu = ref(true)
  const switchMenu = (open: boolean) => (isOpenMenu.value = open)
  return {
    isOpenMenu: readonly(isOpenMenu),
    switchMenu,
  }
}

export type IsOpenMenuStore = ReturnType<typeof useIsOpenMenu>
export const isOpenMenuKey: InjectionKey<IsOpenMenuStore> = Symbol('IsOpenMenuStore')
