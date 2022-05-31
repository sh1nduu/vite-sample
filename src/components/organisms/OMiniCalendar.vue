<script setup lang="ts">
import OMiniCalendarHeader from '@/components/organisms/OMiniCalendarHeader.vue'
import OMiniCalendarTable from '@/components/organisms/OMiniCalendarTable.vue'
import { useDaySelector } from '@/composables/use-day-selector';
import { computed, ref, watchEffect } from 'vue';

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

const { dayModel: monthModel } = useDaySelector(props.selectedDay)
watchEffect(() => monthModel.value = props.selectedDay)

</script>

<template>
  <div class="o-mini-calendar">
    <o-mini-calendar-header v-model:day="monthModel" />
    <o-mini-calendar-table
      v-model:selected-day="selectedDayModel"
      v-model:display-month="monthModel"
      :today="today"
    />
  </div>
</template>

<style scoped lang="scss"></style>
