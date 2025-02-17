<template>
  <ModalWindow @close="router.push('/projects')" />
</template>

<script lang="ts" setup>
  const router = useRouter()
</script>