<template>
  <div class="bg-white rounded-xl p-2 flex flex-col gap-4">
    <div class="flex items-center gap-3 px-2 pt-2">
      <span class="w-1.5 h-1.5 bg-blue-600 rounded-full block"></span>
      <h2 class="text-lg font-medium">About Me</h2>
    </div>
    <div class="bg-slate-50 p-4 rounded-xl">
      <p class="text-sm font-light text-gray-600">{{ aboutMe.description }}</p>
      <div class="border-t border-gray-200 mt-4 pt-4 flex flex-col gap-4">
        <a v-for="link in aboutMe.links" :key="link.href" :href="link.href" class="flex items-center gap-2">
          <IconsExternalLink v-if="link.icon === 'ExternalLink'" class="w-5 h-5" />
          <IconsEmail v-else-if="link.icon === 'Email'" class="w-5 h-5" />
          <IconsPhone v-else-if="link.icon === 'Phone'" class="w-5 h-5" />
          <IconsGithub v-else-if="link.icon === 'Github'" class="w-5 h-5" />
          <IconsLinkedIn v-else-if="link.icon === 'LinkedIn'" class="w-5 h-5" />
          <span class="text-sm">{{ link.text }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Link {
  href: string
  text: string
  icon: string
}

interface AboutMe {
  description: string
  links: Link[]
}

defineProps<{
  aboutMe: AboutMe
}>()
</script>

