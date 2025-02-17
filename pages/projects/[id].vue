<template>
  <ModalWindow  />
</template>

<script lang="ts" setup>
  import projectData from '~/data/projects.json'

  const id = useRoute().params.id
  const project = computed(() => projectData.find((project) => project.id === +id)!)

  const isOpen = ref(true)
</script>