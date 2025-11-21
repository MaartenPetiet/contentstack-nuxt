<script setup lang="ts">
import type { List } from "~~/types/contentstack";

defineProps<{
  options: List;
}>();
</script>

<template>
  <ul>
    <li v-for="option in options.list_items">{{ option.list_item.text }}</li>
  </ul>
</template>
