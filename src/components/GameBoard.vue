<script setup lang="ts">
import SudokuBlock from './SudokuBlock.vue'
</script>

<template>
  <div class="board">
    <SudokuBlock v-for="n in 9" :key="n" />
  </div>
</template>

<style scoped></style>
