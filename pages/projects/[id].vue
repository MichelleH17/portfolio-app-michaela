<template>
  <ModalWindow @close="router.push('/projects')" />
</template>

<script lang="ts" setup>
  import projectData from '~/data/projects.json'

  const router = useRouter()
  const id = useRoute().params.id
  const project = computed(() => projectData.find((project) => project.id === +id)!)

  const isOpen = ref(true)
</script>