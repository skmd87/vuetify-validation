export default defineNuxtConfig({
  modules: ['../src/module', 'vuetify-nuxt-module'],
  vuetifyValidation: {
    defaultLocale: 'en'
  },
  devtools: { enabled: true }
})
