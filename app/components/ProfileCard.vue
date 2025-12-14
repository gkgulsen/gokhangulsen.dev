<template>
  <div class="relative flex flex-col gap-4 bg-white rounded-xl overflow-hidden pb-2">
    <div class="absolute">
      <img src="/img/banner.png" alt="">
    </div>
    <div
      class="px-4 py-4 bottom-0 left-0 w-full bg-gradient-to-t from-white from-7% to-transparent relative mt-16 sm:mt-20">
      <img class="w-16 h-16 sm:w-20 sm:h-20 rounded-full ring-2 ring-white mb-2" :src="profile.avatar"
        alt="Bordered avatar">
      <h1 class="text-base sm:text-lg font-medium">{{ profile.name }}</h1>
      <h3 class="text-xs sm:text-sm text-gray-500">{{ profile.title }} / {{ profile.location }}</h3>
    </div>
    <div class="mx-2 p-4 flex flex-col gap-4 bg-slate-50 rounded-xl">
      <div class="">
        <p class="text-xs sm:text-sm font-light text-gray-600 whitespace-pre-line">{{ profile.description }}</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <!-- Backend -->
        <template v-if="profile.skills.backend && profile.skills.backend.length > 0">
          <div v-for="skill in profile.skills.backend" :key="skill.name" 
            class="flex items-center gap-1.5 bg-slate-200 px-2.5 py-1.5 rounded-sm group hover:bg-slate-300 transition-colors"
            :title="skill.name">
            <img :src="skill.icon" :alt="skill.name" class="w-4 h-4 object-contain">
            <span class="text-xs text-gray-700 hidden sm:inline">{{ skill.name }}</span>
          </div>
        </template>
        <!-- Frontend -->
        <template v-if="profile.skills.frontend && profile.skills.frontend.length > 0">
          <div v-for="skill in profile.skills.frontend" :key="skill.name" 
            class="flex items-center gap-1.5 bg-slate-200 px-2.5 py-1.5 rounded-sm group hover:bg-slate-300 transition-colors"
            :title="skill.name">
            <img :src="skill.icon" :alt="skill.name" class="w-4 h-4 object-contain">
            <span class="text-xs text-gray-700 hidden sm:inline">{{ skill.name }}</span>
          </div>
        </template>
        <!-- Database -->
        <template v-if="profile.skills.database && profile.skills.database.length > 0">
          <div v-for="skill in profile.skills.database" :key="skill.name" 
            class="flex items-center gap-1.5 bg-slate-200 px-2.5 py-1.5 rounded-sm group hover:bg-slate-300 transition-colors"
            :title="skill.name">
            <img :src="skill.icon" :alt="skill.name" class="w-4 h-4 object-contain">
            <span class="text-xs text-gray-700 hidden sm:inline">{{ skill.name }}</span>
          </div>
        </template>
        <!-- Observability -->
        <template v-if="profile.skills.observability && profile.skills.observability.length > 0">
          <div v-for="skill in profile.skills.observability" :key="skill.name" 
            class="flex items-center gap-1.5 bg-slate-200 px-2.5 py-1.5 rounded-sm group hover:bg-slate-300 transition-colors"
            :title="skill.name">
            <img :src="skill.icon" :alt="skill.name" class="w-4 h-4 object-contain">
            <span class="text-xs text-gray-700 hidden sm:inline">{{ skill.name }}</span>
          </div>
        </template>
        <!-- Other -->
        <template v-if="profile.skills.other && profile.skills.other.length > 0">
          <div v-for="skill in profile.skills.other" :key="skill.name" 
            class="flex items-center gap-1.5 bg-slate-200 px-2.5 py-1.5 rounded-sm group hover:bg-slate-300 transition-colors"
            :title="skill.name">
            <img :src="skill.icon" :alt="skill.name" class="w-4 h-4 object-contain">
            <span class="text-xs text-gray-700 hidden sm:inline">{{ skill.name }}</span>
          </div>
        </template>
      </div>
      <div class="hidden print:block">
        <button @click="downloadCV"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm px-4 py-2.5 sm:py-3 flex items-center justify-center gap-2 sm:gap-4 rounded-lg">
          <span>Download CV</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" height="20"
            width="20">
            <path
              d="M2.5 10.625v1.25a1.25 1.25 0 0 0 1.25 1.25h7.5a1.25 1.25 0 0 0 1.25 -1.25v-1.25"
              stroke-width="2"></path>
            <path d="m4.375 6.875 3.125 3.125 3.125 -3.125" stroke-width="1"></path>
            <path d="m7.5 2.5 0 7.5" stroke-width="2"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Skill {
  name: string
  icon: string
}

interface Skills {
  backend?: Skill[]
  frontend?: Skill[]
  database?: Skill[]
  observability?: Skill[]
  other?: Skill[]
}

interface Profile {
  name: string
  title: string
  location: string
  avatar: string
  description: string
  skills: Skills
  cvUrl: string
}

defineProps<{
  profile: Profile
}>()

const downloadCV = () => {
  window.print()
}
</script>

