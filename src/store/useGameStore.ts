import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

type DifficultyLevel = {
  level: number
  label: string
}

export const useGameStore = defineStore('game', () => {
  const difficultyOptions: DifficultyLevel[] = [
    { level: 1, label: 'Easy' },
    { level: 2, label: 'Medium' },
    { level: 3, label: 'Hard' },
  ]
  const difficulty = ref(difficultyOptions[0])

  const difficultyLabel = computed(() => {
    return difficulty.value.label
  })

  function isDifficulty(level: DifficultyLevel) {
    return level.level === difficulty.value.level
  }

  function setDifficulty(level: DifficultyLevel) {
    difficulty.value = level
  }
  return { difficultyOptions, difficultyLabel, isDifficulty, setDifficulty }
})
