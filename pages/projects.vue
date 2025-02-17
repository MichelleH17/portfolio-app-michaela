<template>
  <div class="mt-4 sm:mt-8 md:mt-16 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import projectData from '~/data/projects.json'

const projects = ref(projectData)
</script>
