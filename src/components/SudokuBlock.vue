<script setup lang="ts">
import NumberBlock from './NumberBlock.vue'
</script>

<template>
  <div class="sudoku-block">
    <NumberBlock v-for="n in 9" :key="n" />
  </div>
</template>

<style scoped>
.sudoku-block {
  border: 1px solid black;
}
</style>
