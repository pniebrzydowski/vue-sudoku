<script setup lang="ts">
import ButtonLink from '../ButtonLink.vue'
</script>

<template>
  <div class="full-screen-container">
    <div>
      <div class="buttons">
        <ButtonLink url="/" label="Play Again"></ButtonLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.full-screen-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
