// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/icon', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Outfit: [400, 500, 600, 700],
      Ovo: [400],
    }
  },
})
