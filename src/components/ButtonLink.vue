<script setup lang="ts">
defineProps<{
  url: string
  label: string
}>()
</script>

<template>
  <router-link class="button" :to="url">{{ label }}</router-link>
</template>

<style scoped>
.button {
  color: white;
  display: inline-block;
  background-color: darkslategrey;
  text-decoration: none;
  padding: 0.5em 1em;
}
</style>
