<script setup lang="ts">
import { provide } from 'vue'

import PHome from '@/components/pages/PHome.vue'
import '@/assets/scss/base.scss'

import { useDaySelector, daySelectorKey, todaySelectorKey } from '@/composables/use-day-selector'

provide(todaySelectorKey, useDaySelector(new Date()))
provide(daySelectorKey, useDaySelector(new Date(2022, 4, 10)))
</script>

<template>
  <p-home />
</template>
