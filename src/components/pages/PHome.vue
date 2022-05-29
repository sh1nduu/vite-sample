<script setup lang="ts">
import { inject } from 'vue'

import TDefault from '@/components/templates/TDefault.vue';
import OHeader from '@/components/organisms/OHeader.vue'
import OSideMenu from '@/components/organisms/OSideMenu.vue'
import OMiniCalendar from '@/components/organisms/OMiniCalendar.vue'
import HelloWorld from '@/components/HelloWorld.vue'

import { daySelectorKey, DaySelectorStore, todaySelectorKey } from '@/composables/use-day-selector'

const { dayModel: selectedDayModel } = inject(daySelectorKey) as DaySelectorStore
const { day: today } = inject(todaySelectorKey) as DaySelectorStore
</script>

<template>
  <t-default class="p-home">
    <template #header>
      <o-header />
    </template>

    <template #menu>
      <o-side-menu>
        <o-mini-calendar
          v-model:selected-day="selectedDayModel"
          :today="today"
        />
      </o-side-menu>
    </template>

    <template #default>
      <img
        alt="Vue logo"
        src="@/assets/logo.png"
      >
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    </template>
  </t-default>
</template>

<style scoped lang="scss">
</style>