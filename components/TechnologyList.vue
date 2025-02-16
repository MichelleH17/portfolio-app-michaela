<template>
  <div class="container mx-auto flex flex-wrap gap-4 md:gap-6 mt-4 sm:mt-8 justify-center max-w-3xl">
    <Icon v-for="(icon, index) in icons" :key="index" :name="icon.name" size="2em" :title="icon.title" />
  </div>
</template>

<script lang="ts" setup>
  const icons = [
  { name: 'devicon:html5', title: 'HTML5' },
  { name: 'devicon:css3', title: 'CSS3' },
  { name: 'devicon:javascript', title: 'JavaScript' },
  { name: 'devicon:vuejs', title: 'Vue.js' },
  { name: 'logos:nuxt-icon', title: 'Nuxt' },
  { name: 'devicon:tailwindcss', title: 'Tailwind CSS' },
  { name: 'devicon:vuetify', title: 'Vuetify' },
  { name: 'logos:rails', title: 'Ruby on Rails' },
  { name: 'simple-icons:hotwire', title: 'Hotwire' },
  { name: 'devicon:figma', title: 'Figma' },
  { name: 'vscode-icons:file-type-git', title: 'Git' },
  { name: 'logos:github-icon', title: 'GitHub' },
];
</script>