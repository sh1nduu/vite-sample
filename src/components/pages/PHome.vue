<script setup lang="ts">
import OCalendar from '@/components/organisms/OCalendar.vue'
import OHeader from '@/components/organisms/OHeader.vue'
import OMiniCalendar from '@/components/organisms/OMiniCalendar.vue'
import OSideMenu from '@/components/organisms/OSideMenu.vue'
import TDefault from '@/components/templates/TDefault.vue'
import { calendarKey, CalendarStore } from '@/composables/use-month-calendar'
import { inject } from 'vue'

const { calendar: calendar } = inject(calendarKey) as CalendarStore
</script>

<template>
  <t-default class="p-home">
    <template #header>
      <o-header />
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
