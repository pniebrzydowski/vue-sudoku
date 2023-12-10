<script setup lang="ts">
import ButtonLink from '@/components/ButtonLink.vue'
import { useUserStore } from '@/store/useUserStore'
import { useGameStore } from '@/store/useGameStore'
const user = useUserStore()
const game = useGameStore()
</script>

<template>
  <div class="full-screen-container">
    <div class="content">
      <header>
        <h1>Sudoku</h1>
      </header>
      <section class="user-input">
        Enter your name:
        <input type="text" v-model="user.name" />
      </section>
      <section class="user-input">
        Select Difficulty:
        <button
          v-for="level in game.difficultyOptions"
          :key="level.level"
          @click="game.setDifficulty(level)"
          :class="game.isDifficulty(level) ? 'active' : ''"
        >
          {{ level.label }}
        </button>
      </section>

      <section class="buttons">
        <ButtonLink url="/play" label="Start Game"></ButtonLink>
      </section>
    </div>
  </div>
</template>

<style>
.full-screen-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.content > section {
  margin-top: 2rem;
}

.user-input button,
.user-input input {
  padding: 0.5rem 1rem;
}
.user-input button:hover {
  background-color: #c0ffea;
}

.active {
  background-color: #7fffd4;
}
</style>
