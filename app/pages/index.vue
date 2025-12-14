<template>
  <div class="container max-w-screen-lg mx-auto py-8 md:py-20 px-4 md:px-0">
    <div class="flex flex-col md:flex-row gap-4">
      <div class="w-full md:w-[323px] flex flex-col gap-4">
        <ProfileCard :profile="profile" />
        <AboutMe :about-me="aboutMe" />
        <Information :information="information" />
      </div>
      <div class="flex-1 flex flex-col gap-4">
        <div class="bg-white rounded-xl p-2 md:p-2 flex flex-col gap-2">
          <SectionHeader title="Experience" />
          <ExperienceCard v-for="experience in experiences" :key="experience.company" :experience="experience" />
        </div>
        <!-- <div class="bg-white rounded-xl p-2 md:p-2 flex flex-col gap-2">
          <SectionHeader title="Education" />
          <EducationCard v-for="education in educations" :key="education.university" :education="education" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { profile, aboutMe, information, experiences, educations } = useProfileData()
</script>

