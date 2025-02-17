<template>
  <div class="hover:border-custom_green hover:bg-custom_gray hover:shadow-custom_darker_green border border-gray-100 shadow-md rounded-md p-4">
    <div class="flex flex-col space-y-4">
      <h3 class="text-xl font-semibold">{{ project.title }}</h3>
      <p class="text-gray-700">{{ truncateDescription(project.description) }}</p>
      <NuxtLink :to="`/projects/${ project.id}`"
        class="rounded-md bg-custom_green px-4 py-2 text-sm w-fit whitespace-nowrap font-medium text-custom_black hover:bg-custom_darker_green"
      >
        More information
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{ 
    project: IProject
  }>()

  const truncateDescription = (description: string) => {
    return description.length > 85 ? `${description.slice(0, 85)}...` : description
  }
</script>
