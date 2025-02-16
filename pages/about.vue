<template>
  <div class="flex flex-col items-center mt-4 sm:mt-8 md:mt-16 text-custom_black px-4">
    <h1 class="text-custom_darker_green text-3xl font-semibold text-center mb-4 sm:mb-8">About me</h1>
    <div class="border-gray-100 shadow-md rounded-md p-4 md:py-8 flex flex-col space-y-4">
      <p class="text-gray-700 font-Outfit">I am a creative front-end developer with experience in administration, accounting, and HR, which allows me to effectively use my analytical and organizational skills. I am currently developing my own web application for real estate sales in Bulgaria.</p>
      <p class="text-gray-700 font-Outfit">I like to learn new technologies, easily integrate into teams, and communicate in both Czech and English. I am a curious, caring, and enthusiastic developer, focusing on projects in Vue.js and Nuxt.js.</p>
      <p class="text-gray-700 font-Outfit">I attend courses, such as Figma by Czechitas, listen to podcasts, and read books about programming and personal development.</p>
    </div>
    
    <h2 class="text-custom_darker_green text-2xl font-semibold mt-4 sm:mt-8 md:mt-16">Skills</h2>
    <div class="flex flex-wrap gap-4 md:gap-6 mt-4 sm:mt-8 justify-center max-w-3xl">
      <Icon name="devicon:html5" size="3em" title="HTML5" />
      <Icon name="devicon:css3" size="3em" title="CSS3" />
      <Icon name="devicon:javascript" size="3em" title="JavaScript" />
      <Icon name="devicon:vuejs" size="3em" title="Vue.js" />
      <Icon name="logos:nuxt-icon" size="3em" title="Nuxt.js" />
      <Icon name="devicon:tailwindcss" size="3em" title="Tailwind CSS" />
      <Icon name="devicon:vuetify" size="3em" title="Vuetify" />
      <Icon name="logos:rails" size="3em" title="Ruby on Rails" />
      <Icon name="simple-icons:hotwire" class="text-black" size="3em" title="Hotwire" />
      <Icon name="devicon:figma" size="3em" title="Figma" />
      <Icon name="vscode-icons:file-type-git" size="3em" title="Git" />
      <Icon name="logos:github-icon" size="3em" title="GitHub" />
    </div>
    
    <h2 class="text-custom_darker_green text-2xl font-semibold mt-4 sm:mt-8 md:mt-16 md:px-8">Work experience</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 sm:mt-8">
      <div class="border-gray-100 shadow-md rounded-md p-4 md:py-8 text-custom_black">
        <h3 class="text-xl font-semibold font-Ovo">Front-end developer</h3>
        <p class="font-Ovo font-semibold">Navisys, Brno</p>
        <p class="font-Ovo font-semibold mb-2">January 2025 - Present</p>
        <div class="flex flex-col gap-2 text-gray-700 font-Outfit mt-2">
          <p>Web application development using Vue 3, Nuxt 3, Pinia, Tailwind CSS.</p>
          <p>Collaborating with UX/UI designers to create user-friendly interfaces.</p>
          <p>Implementing best practices for code quality and performance optimization.</p>
          <p>Participating in code reviews and team meetings.</p>
          <p>Working closely with backend developers on frontend integration.</p>
        </div>
      </div>
      <div class="border-gray-100 shadow-md rounded-md p-4 md:py-8 text-custom_black">
        <h3 class="text-xl font-semibold font-Ovo">Junior front-end developer</h3>
        <p class="font-Ovo font-semibold">NejŘemeslníci.cz, Prague, Czech Republic</p>
        <p class="font-Ovo font-semibold">June 2021 - July 2024</p>
        <div class="flex flex-col gap-2 text-gray-700 font-Outfit mt-2">
          <p>Web application development using Ruby on Rails, Hotwire, and Tailwind CSS.</p>
          <p>Implementing responsive design in Figma.</p>
          <p>Collaborating with backend developers on frontend integration.</p>
          <p>Working with Git to create, code review, and deploy pull requests on GitHub.</p>
          <p>Participating in daily stand-ups and sprint planning meetings.</p>
        </div>
      </div> 
      </div>

    <h2 class="text-custom_darker_green text-2xl font-semibold mt-4 sm:mt-8">Contact details</h2>
    <div class="text-gray-700 font-Ovo font-semibold my-4 sm:my-8 flex gap-8">
      <p>michelle.h@seznam.cz</p>
      <p>+420 724 304 557</p>
    </div>
  </div>
</template>