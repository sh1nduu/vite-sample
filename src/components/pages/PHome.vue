<script setup lang="ts">
import OCalendar from '@/components/organisms/OCalendar.vue'
import OHeader from '@/components/organisms/OHeader.vue'
import OMiniCalendar from '@/components/organisms/OMiniCalendar.vue'
import OSideMenu from '@/components/organisms/OSideMenu.vue'
import TDefault from '@/components/templates/TDefault.vue'
import { calendarKey, CalendarStore } from '@/composables/use-month-calendar'
import { isOpenMenuKey, IsOpenMenuStore } from '@/composables/use-is-open-menu'
import { inject } from 'vue'

const { calendar } = inject(calendarKey) as CalendarStore
const { isOpenMenu, switchMenu } = inject(isOpenMenuKey) as IsOpenMenuStore
</script>

<template>
  <t-default
    class="p-home"
    :is-open-menu="isOpenMenu"
  >
    <template #header>
      <o-header
        :is-open-menu="isOpenMenu"
        @update:is-open-menu="switchMenu"
      />
    </template>

    <template #menu>
      <o-side-menu>
        <o-mini-calendar :calendar="calendar" />
      </o-side-menu>
    </template>

    <template #default>
      <o-calendar :calendar="calendar" />
    </template>
  </t-default>
</template>

<style scoped lang="scss"></style>
