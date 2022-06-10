<script setup lang="ts">
import AButton from '@/components/atoms/AButton.vue'
import ACircleButton from '@/components/atoms/ACircleButton.vue'
import AText from '@/components/atoms/AText.vue'
import MArrowButtons from '@/components/molecules/MArrowButtons.vue'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
</script>

<template>
  <div class="o-header">
    <div class="left">
      <a-circle-button
        class="item"
        tooltip-text="メインメニュー"
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
          :tooltip-text="'2022年 6月11日 (土曜)'"
        >
          今日
        </a-button>
        <m-arrow-buttons
          class="item"
          :size="24"
          left-tooltip-text="前月"
          right-tooltip-text="翌月"
        />
        <a-text class="item">
          2022年 6月
        </a-text>
      </div>
      <div class="center-right">
        <a-circle-button class="item">
          <magnify-icon />
        </a-circle-button>
        <div class="item">
          Dropdown
        </div>
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
