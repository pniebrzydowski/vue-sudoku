<script setup lang="ts"></script>

<template>
  <div class="number-block"></div>
</template>

<style scoped>
/** 
 * Even though styles are scoped, the class name here must be different than parent,
 * as class from parent would otherwise override styles.
 * This only goes one level from parent to child and only applies to the child's root element.
 **/
.number-block {
  border: 1px solid darkgray;
  width: 100%;
  height: 100%;
}
</style>
`
