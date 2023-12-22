<script setup lang="ts">
import { useGameStore } from '@/store/useGameStore'
import SudokuBlock from './SudokuBlock.vue'
function transformArray(originalArray: number[][]) {
  const newArray = []

  for (let i = 0; i < originalArray.length; i += 3) {
    for (let j = 0; j < 3; j++) {
      const newRow = []
      for (let k = 0; k < 3; k++) {
        newRow.push(
          originalArray[i + k][j * 3],
          originalArray[i + k][j * 3 + 1],
          originalArray[i + k][j * 3 + 2],
        )
      }
      newArray.push(newRow)
    }
  }

  return newArray
}

const game = useGameStore()
const url = `https://sugoku.onrender.com/board?difficulty=${game.difficultyValue}`
const res = await fetch(url)
const { board } = await res.json()
const transformedBoard = transformArray(board)
game.board = transformedBoard
</script>

<template>
  <div class="board">
    <SudokuBlock v-for="n in 9" :key="n" :block-number="n" />
  </div>
</template>

<style scoped>
.board {
  display: grid;
  width: calc(100vmin - 4rem);
  height: calc(100vmin - 4rem);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>
