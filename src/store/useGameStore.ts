import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

type DifficultyLevel = {
  level: string
  label: string
}

export const useGameStore = defineStore('game', () => {
  const difficultyOptions: DifficultyLevel[] = [
    { level: 'easy', label: 'Easy' },
    { level: 'medium', label: 'Medium' },
    { level: 'hard', label: 'Hard' },
  ]
  const difficulty = ref(difficultyOptions[0])
  const board = ref<number[][] | null>(null)

  const difficultyLabel = computed(() => {
    return difficulty.value.label
  })
  const difficultyValue = computed(() => {
    return difficulty.value.level
  })

  function isDifficulty(level: DifficultyLevel) {
    return level.level === difficulty.value.level
  }

  function setDifficulty(level: DifficultyLevel) {
    difficulty.value = level
  }
  return { board, difficultyValue, difficultyOptions, difficultyLabel, isDifficulty, setDifficulty }
})
