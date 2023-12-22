<script setup lang="ts">
import { useGameStore } from '@/store/useGameStore'
import { isValidSudokuNumber } from '@/utils/isValidSudokuNumber'
import { ref } from 'vue'
const game = useGameStore()
const props = defineProps<{
  sudokuBlockNumber: number
  numberBlockNumber: number
}>()
const number = ref('')
const blockNumber = game.board
  ? String(game.board[props.sudokuBlockNumber - 1][props.numberBlockNumber - 1] || '')
  : ''

const preventSpecialChars = ($event: KeyboardEvent) => {
  if (['Backspace', 'Delete', 'ArrowUp', 'ArrowDown'].includes($event.key)) return
  if ($event.key === '.' || $event.key === '-' || !isValidSudokuNumber(+$event.key)) {
    $event.preventDefault()
  }
}

const adjustNumber = ($event: Event) => {
  const inputValue = ($event.target as HTMLInputElement).value
  const lastNumber = inputValue[inputValue.length - 1]
  if (!lastNumber || !isValidSudokuNumber(+lastNumber)) {
    number.value = ''
    return
  }
  number.value = lastNumber
}
</script>

<template>
  <div class="number-block">
    <span class="static-number" v-if="blockNumber">{{ blockNumber }}</span>
    <input
      v-else
      type="number"
      min="1"
      max="9"
      v-model="number"
      @input="adjustNumber"
      @keydown="preventSpecialChars"
    />
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

input,
.static-number {
  display: block;
  text-align: center;
  font-size: 2em;
}

input {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0;
  appearance: none;
  color: #077;
  font-weight: bold;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.input:focus {
  background-color: rgb(228, 255, 255);
}
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>
