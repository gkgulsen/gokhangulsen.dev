<template>
  <div class="bg-slate-50 px-4 rounded-xl p-4">
    <div class="">
      <div class="flex flex-col gap-2 w-full">
        <div class="">
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <div>
              <h3 class="text-lg font-medium text-gray-800">{{ education.university }}</h3>
              <h4 class="text-sm font-medium text-gray-500">{{ education.department }}</h4>
            </div>
            <span class="bg-slate-200 text-gray-700 text-xs px-2.5 py-1 rounded-sm self-start sm:self-auto">{{ education.period }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Education {
  university: string
  department: string
  period: string
}

defineProps<{
  education: Education
}>()
</script>

