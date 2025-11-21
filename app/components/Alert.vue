<script setup lang="ts">
import type { Alert } from "~~/types/contentstack";

defineProps<{
  options: Alert;
}>();
</script>

<template>
  <div>
    <h2>{{ options.title }}</h2>
    <p>{{ options.description }}</p>
  </div>
</template>

<style scoped>
div {
  background-color: lightblue;
  padding: 24px;
}
</style>
