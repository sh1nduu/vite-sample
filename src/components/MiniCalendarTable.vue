<script setup lang="ts">
import MiniCalendarTableRow from '@/components/MiniCalendarTableRow.vue'

const rows = Array(7).fill(0)
</script>

<template>
  <table>
    <tbody>
      <mini-calendar-table-row
        v-for="(row, index) in rows"
        :key="index"
      />
    </tbody>
  </table>
</template>

<style lang="scss">
table {
  width: 100%;
}
</style>
