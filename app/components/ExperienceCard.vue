<template>
  <div class="bg-slate-50 px-4 rounded-xl p-4">
    <div class="flex items-start gap-4 sm:gap-6">
      <div class="flex-shrink-0 flex flex-col items-center gap-4">
        <div class="bg-white rounded-full p-1 sm:p-2">
          <img v-if="experience.logo" :src="experience.logo" width="40" height="40" alt="" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover">
          <div v-else class="bg-gray-200 rounded-full w-10 h-10 sm:w-14 sm:h-14"></div>
        </div>
        <div v-if="experience.logo2" class="bg-white rounded-full p-1 sm:p-2">
          <img :src="experience.logo2" width="40" height="40" alt="" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover">
        </div>
      </div>
      <div class="flex flex-col gap-2 w-full">
        <div class="">
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <h3 class="text-lg font-medium text-gray-800">{{ experience.title }}</h3>
            <span class="bg-slate-200 text-gray-700 text-xs px-2.5 py-1 rounded-sm self-start sm:self-auto">{{ experience.type }}</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-2 sm:gap-4">
          <div class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 text-gray-500">
              <path fill="currentColor"
                d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 16v3h16v-3zm0-2h16V7H4zM9 3v2h6V3zm2 8h2v2h-2z">
              </path>
            </svg>
            <a v-if="experience.companyUrl" :href="experience.companyUrl" target="_blank" class="text-xs text-gray-500 hover:text-blue-600 hover:underline">{{ experience.company }}</a>
            <span v-else class="text-xs text-gray-500">{{ experience.company }}</span>
          </div>
          <div class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 text-gray-500">
              <path fill="currentColor"
                d="m12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9zM12 13a2 2 0 1 1 0-4a2 2 0 0 1 0 4">
              </path>
            </svg>
            <span class="text-xs text-gray-500">{{ experience.location }}</span>
          </div>
          <div class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 text-gray-500">
              <path fill="currentColor"
                d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zm-9 2v4H6v-4zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z">
              </path>
            </svg>
            <span class="text-xs text-gray-500">{{ experience.period }}</span>
          </div>
        </div>
        <div v-if="experience.description" class="mt-4 pe-0 sm:pe-10">
          <p class="text-sm font-light text-gray-600">{{ experience.description }}</p>
          <ul v-if="experience.projects && experience.projects.length > 0"
            class="mt-2 text-sm font-light text-gray-600 space-y-1 list-disc list-inside pl-5">
            <li v-for="(project, index) in experience.projects" :key="index">
              <a v-if="typeof project === 'object' && project.href" :href="project.href" class="text-blue-600 hover:underline">{{ project.name }}</a>
              <span v-else-if="typeof project === 'object'">{{ project.name }}</span>
              <span v-else>{{ project }}</span>
            </li>
          </ul>
          <div v-if="experience.technologies && experience.technologies.length > 0" class="flex flex-wrap gap-2 mt-4">
            <span v-for="tech in experience.technologies" :key="tech"
              class="bg-slate-200 text-gray-700 text-xs px-2.5 py-1 rounded-sm">{{ tech }}</span>
          </div>
          <p v-if="experience.additionalInfo" class="text-xs font-light text-gray-600 mt-4">{{ experience.additionalInfo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  name: string
  href?: string
}

interface Experience {
  title: string
  type: string
  company: string
  companyUrl?: string
  location: string
  period: string
  logo?: string
  logo2?: string
  description?: string
  projects?: (Project | string)[]
  technologies?: string[]
  additionalInfo?: string
}

defineProps<{
  experience: Experience
}>()
</script>

