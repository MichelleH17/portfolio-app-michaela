<template>
  <div class="hover:border-custom_green hover:bg-custom_gray hover:shadow-custom_darker_green border border-gray-100 shadow-md rounded-md px-2 md:px-4 py-4 md:py-8">
    <NuxtLink :to="`/project/${project.id}`" class="px-4 py-2 rounded-md whitespace-nowrap">
      <h3 class="text-xl font-semibold mb-2 font-Ovo">{{ project.title }}</h3>
      <p class="text-gray-700 font-Outfit">{{ truncateDescription(project.description) }}</p>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{ 
    project: IProject
  }>()
  const truncateDescription = (description: string) => {
    return description.length > 30 ? `${description.slice(0, 30)}...` : description
  }
</script>

<style>

</style>