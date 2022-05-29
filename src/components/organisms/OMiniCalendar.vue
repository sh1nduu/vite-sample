<script setup lang="ts">
import OMiniCalendarHeader from '@/components/organisms/OMiniCalendarHeader.vue'
import OMiniCalendarTable from '@/components/organisms/OMiniCalendarTable.vue'
import { computed } from 'vue';

interface Props {
  selectedDay: Date
  today: Date
}
const props = defineProps<Props>()

interface Emits {
  (e: 'update:selectedDay', value: Date): void
}
const emits = defineEmits<Emits>()

const selectedDayModel = computed({
  get: () => props.selectedDay,
  set: (value: Date) => emits('update:selectedDay', value)
})

</script>

<template>
  <div class="o-mini-calendar">
    <o-mini-calendar-header :selected-day="selectedDay" />
    <o-mini-calendar-table
      v-model:selected-day="selectedDayModel"
      :today="today"
    />
  </div>
</template>

<style lang="scss"></style>
