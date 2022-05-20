<script setup lang="ts">
import MiniCalendarTableCell from '@/components/MiniCalendarTableCell.vue'

const cells = [...Array(7)].map((_, i) => i)
</script>

<template>
  <tr>
    <mini-calendar-table-cell
      v-for="(cell, index) in cells"
      :key="index"
    />
  </tr>
</template>

<style lang="scss"></style>
