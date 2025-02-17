<template>
  <div>
    <div class="flex flex-col items-center mt-4 sm:mt-8 md:mt-16 text-custom_black px-4">
      <NuxtImg fit="cover" format="webp" src="../public/assets/images/michaela_avatar.jpg" alt="Profile picture" width="400" height="400" class="rounded-full" />
      <h2 class="text-custom_darker_green text-3xl font-semibold mt-4">Michaela Havlíková</h2>
      <h3 class="text-lg text-custom_black">Frontend developer</h3>
      <div class="flex flex-row gap-8 md:gap-16 mt-8">
        <NuxtLink to="https://github.com/MichelleH17" target="_blank" rel="noopener noreferrer" class="bg-custom_green hover:bg-custom_darker_green hover:text-white w-32 text-center py-2 rounded-md font-semibold whitespace-nowrap flex items-center justify-center">
          GitHub
          <Icon name="uil:github" size="1.25em" style="background-color: custom_black" class="ml-1" />
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/in/michaela-havlikova/" target="_blank" rel="noopener noreferrer" class="bg-custom_green hover:bg-custom_darker_green hover:text-white w-32 py-2 rounded-md font-semibold whitespace-nowrap flex items-center justify-center">
          LinkedIn
          <Icon name="uil:linkedin" size="1.25em" style="background-color: custom_black" class="ml-1" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>