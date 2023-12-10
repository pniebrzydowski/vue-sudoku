<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import ButtonLink from '@/components/ButtonLink.vue'
import { router } from '@/router'
import { useUserStore } from '@/store/useUserStore'
import { useGameStore } from '@/store/useGameStore'
const user = useUserStore()
const game = useGameStore()

function submitPuzzle() {
  // @todo - implement submission and only navigate on correct submission
  router.push('/game-over')
}
</script>

<template>
  <main>
    <GameBoard />
  </main>
  <aside>
    <header>
      <h1>Sudoku</h1>
      <ButtonLink url="/" label="Start Over" />
    </header>
    <section>
      <p>
        <strong>Player:</strong>
        {{ user.name }}
      </p>
      <p>
        <strong>Difficulty:</strong>
        {{ game.difficultyLabel }}
      </p>
    </section>
    <footer>
      <ButtonLink label="Submit Puzzle" @click="submitPuzzle" />
    </footer>
  </aside>
</template>

<style scoped>
main {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: calc(100vw - 4rem);
  max-height: calc(100vh - 4rem);
}

aside {
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
}

aside header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

aside section {
  padding: 1rem 0;
  flex-grow: 1;
}

aside footer .button {
  display: block;
}

@media (min-width: 969px) {
  aside {
    min-width: 300px;
    padding: 0 2rem;
  }
}
</style>
