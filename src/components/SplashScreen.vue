<script setup lang="ts">
import ButtonLink from './ButtonLink.vue'
</script>

<template>
  <div class="full-screen-container">
    <div>
      <h1>Welcome!</h1>
      <div class="buttons">
        <ButtonLink url="/play" label="Start Game"></ButtonLink>
      </div>
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

.buttons {
  margin-top: 2rem;
}
</style>
