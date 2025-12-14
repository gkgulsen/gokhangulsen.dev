<template>
  <div class="flex items-center gap-3 px-2 pt-2 mb-4">
    <span class="w-1.5 h-1.5 bg-blue-600 rounded-full block"></span>
    <h2 class="text-lg font-medium">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

