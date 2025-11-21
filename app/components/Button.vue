<script setup lang="ts">
import type { Button } from "~~/types/contentstack";

defineProps<{
  options: Button;
}>();
</script>

<template>
  <button type="button">{{ options.text }}</button>
</template>
