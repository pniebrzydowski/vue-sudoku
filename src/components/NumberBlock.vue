<script setup lang="ts">
import { useGameStore } from '@/store/useGameStore'
const game = useGameStore()
const props = defineProps<{
  sudokuBlockNumber: number
  numberBlockNumber: number
}>()
const blockNumber = game.board
  ? String(game.board[props.sudokuBlockNumber - 1][props.numberBlockNumber - 1] || '')
  : ''
</script>

<template>
  <div class="number-block">
    <span class="static-number">{{ blockNumber }}</span>
  </div>
</template>

<style scoped>
.number-block {
  border: 1px solid darkgray;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.static-number {
  display: block;
  text-align: center;
  font-size: 2em;
}
</style>
