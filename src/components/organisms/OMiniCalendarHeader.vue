<script setup lang="ts">
import { computed, inject } from 'vue'
import { format, startOfMonth } from 'date-fns'

interface Props {
  selectedDay: Date
}
const props = defineProps<Props>()

const month = computed(() => startOfMonth(props.selectedDay))
const monthText = computed(() => format(month.value, 'yyyy年 M月'))
</script>

<template>
  <div class="m-mini-calendar-header">
    <div class="month">
      {{ monthText }}
    </div>
    <div class="arrow-container">
      <div class="arrow">
        &lt;
      </div>
      <div class="arrow">
        &gt;
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.m-mini-calendar-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  font-size: 14px;
}

.month {
  padding-left: 10px;
}

.arrow-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 4px;

  .arrow {
    height: 24px;
    width: 24px;
    line-height: 24px;
    text-align: center;
    transform: translateY(-2px);
    font-size: 14px;

    &:hover {
      border-radius: 40px;
      background-color: lightgray;
    }
  }
}
</style>
