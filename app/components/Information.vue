<template>
  <div class="bg-white rounded-xl p-2 flex flex-col gap-4">
    <div class="flex items-center gap-3 px-2 pt-2">
      <span class="w-1.5 h-1.5 bg-blue-600 rounded-full block"></span>
      <h2 class="text-lg font-medium">Information</h2>
    </div>
    <div class="bg-slate-50 px-4 rounded-xl">
      <div v-for="(info, index) in information" :key="info.label"
        :class="['flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-sm font-light text-gray-600', index < information.length - 1 ? 'border-b border-gray-200 py-4' : 'py-4']">
        <span class="font-medium sm:font-light">{{ info.label }}</span>
        <div class="text-right sm:max-w-[70%]">
          <span class="block">{{ info.value }}</span>
          <span v-if="info.detail" class="mt-0.5 block text-xs text-gray-500">{{ info.detail }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Info {
  label: string
  value: string
  detail?: string
}

defineProps<{
  information: Info[]
}>()
</script>

