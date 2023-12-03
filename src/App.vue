<script setup lang="ts">
import GameBoard from './components/GameBoard.vue'
</script>

<template>
  <main>
    <GameBoard />
  </main>
  <aside>
    <header><h1>Sudoku</h1></header>
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
  padding: 2rem 0;
}

@media (min-width: 969px) {
  aside {
    min-width: 300px;
    padding: 0 2rem;
  }

  main {
    display: flex;
    place-items: flex-start;
    width: 100%;
  }
}
</style>
