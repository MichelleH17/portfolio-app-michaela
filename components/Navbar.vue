<template>
  <div>
    <header class="md:p-8">
      <nav class="border border-gray-100 shadow-md rounded-md px-2 md:px-4 py-4 md:py-8">
        <ul class="flex gap-2 sm:gap-10 md:gap-20 justify-center font-semibold text-custom_black">
          <li><NuxtLink to="/projects" class="hover:bg-custom_green px-4 py-2 rounded-md whitespace-nowrap">My projects</NuxtLink></li>
          <li><NuxtLink to="/" class="hover:bg-custom_green px-4 py-2 rounded-md whitespace-nowrap">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:bg-custom_green px-4 py-2 rounded-md whitespace-nowrap">About me</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  .router-link-exact-active {
    background-color: #c2deb9;
    padding: 8px 16px;
    border-radius: 6px;
  }

</style>