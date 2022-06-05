<script setup lang="ts">
import OCalendarMonth from '@/components/organisms/OCalendarMonth.vue'
import { Calendar } from '@/composables/use-month-calendar'
import { ref } from 'vue'

interface Props {
  calendar: Calendar
}
const props = defineProps<Props>()

type DisplayMode = 'month' | 'week' | 'day'
const displayMode = ref<DisplayMode>('month')
</script>

<template>
  <o-calendar-month
    v-show="displayMode === 'month'"
    :calendar="calendar"
  />
</template>

<style scoped lang="scss"></style>
