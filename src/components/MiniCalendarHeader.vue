<script setup lang="ts"></script>

<template>
  <div class="header">
    <div>2022年 5月</div>
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
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 32px;
}

.arrow-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .arrow {
    margin-left: 4px;
    height: 24px;
    width: 24px;
    border-radius: 40px;
    text-align: center;

    &:hover {
      background-color: #e5e5e5;
    }
  }
}
</style>
