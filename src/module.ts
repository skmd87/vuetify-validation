import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { defu } from 'defu'
import messages, { type Locales } from './runtime/localization'
import { klona } from 'klona'
// Module options TypeScript interface definition
export interface ModuleOptions {
  defaultLocale?: string,
  messages?: Locales
}
messages
export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vuetify-validation',
    configKey: 'vuetifyValidation'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    defaultLocale: 'en',
    messages: messages
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.vuetifyValidation = defu(nuxt.options.runtimeConfig.public.vuetifyValidation, klona(options))

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
