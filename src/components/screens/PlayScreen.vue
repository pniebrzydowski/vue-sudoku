<script setup lang="ts">
import GameBoard from '../GameBoard.vue'
import ButtonLink from '../ButtonLink.vue'
import { router } from '@/router'

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
    </header>
    <section></section>
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
