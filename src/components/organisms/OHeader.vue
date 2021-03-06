<script setup lang="ts">
import * as C from '@/calendar'
import AButton from '@/components/atoms/AButton.vue'
import ACircleButton from '@/components/atoms/ACircleButton.vue'
import ADropdown from '@/components/atoms/ADropdown.vue'
import ADropdownItem from '@/components/atoms/ADropdownItem.vue'
import AText from '@/components/atoms/AText.vue'
import MArrowButtons from '@/components/molecules/MArrowButtons.vue'
import { Calendar, useCalendarMutator } from '@/composables/use-month-calendar'
import { addMonths, subMonths } from 'date-fns'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'

interface Props {
  isOpenMenu: boolean
  calendar: Calendar
}
const props = defineProps<Props>()

interface Emits {
  (e: 'update:isOpenMenu', value: boolean): void
}
const emits = defineEmits<Emits>()

const switchOpenMenu = () => emits('update:isOpenMenu', !props.isOpenMenu)
const { setMonth, setToday } = useCalendarMutator(props.calendar)
const nextMonth = () => setMonth(C.nextMonthFirstDay(props.calendar.month.value))
const prevMonth = () => setMonth(C.prevMonthFirstDay(props.calendar.month.value))
</script>

<template>
  <div class="o-header">
    <div class="left">
      <a-circle-button
        class="item"
        tooltip-text="メインメニュー"
        @click="switchOpenMenu"
      >
        <menu-icon />
      </a-circle-button>
      <a-text class="item">
        Calendar
      </a-text>
    </div>
    <div class="center">
      <div class="center-left">
        <a-button
          class="item"
          :tooltip-text="C.formatDayLong(calendar.today.value)"
          @click="setToday"
        >
          今日
        </a-button>
        <m-arrow-buttons
          class="item"
          :size="24"
          left-tooltip-text="前月"
          right-tooltip-text="翌月"
          @click-left="prevMonth"
          @click-right="nextMonth"
        />
        <a-text class="item">
          {{ C.formatMonth(calendar.month.value) }}
        </a-text>
      </div>
      <div class="center-right">
        <a-circle-button class="item">
          <magnify-icon />
        </a-circle-button>
        <a-dropdown
          class="item"
          text="月"
        >
          <a-dropdown-item text="日" />
          <a-dropdown-item text="週" />
          <a-dropdown-item text="月" />
          <a-dropdown-item text="年" />
        </a-dropdown>
      </div>
    </div>
    <div class="right" />
  </div>
</template>

<style scoped lang="scss">
.o-header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  box-sizing: border-box;
  border-bottom: 1px solid #cbcbcb;

  .item {
    margin-right: 16px;
  }

  .left {
    display: flex;
    justify-content: start;
    padding: 16px 48px 16px 16px;
  }

  .center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &-left {
      display: flex;
      justify-content: start;
      align-items: center;
    }

    &-right {
      display: flex;
      justify-content: start;
      align-items: center;
    }
  }
}
</style>
