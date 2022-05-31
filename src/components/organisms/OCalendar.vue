<script setup lang="ts">
import { computed, ref } from 'vue';

import OCalendarMonth from '@/components/organisms/OCalendarMonth.vue'
import { usePropSync } from '@/composables/use-prop-sync';

interface Props {
  selectedDay: Date
  today: Date
}
const props = defineProps<Props>()

interface Emits {
  (e: 'update:selectedDay', value: Date): void
}
const emits = defineEmits<Emits>()

type DisplayMode = 'month' | 'week' | 'day'
const displayMode = ref<DisplayMode>('month')

const handleOnClickDayLabel = (day: Date) => emits('update:selectedDay', day)
</script>

<template>
  <o-calendar-month
    v-show="displayMode === 'month'"
    :display-month="selectedDay"
    :today="today"
    @on-click-day-label="handleOnClickDayLabel"
  />
</template>

<style scoped lang="scss">
</style>