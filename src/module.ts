import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { defu } from 'defu'
import messages, { type Locale } from './runtime/localization'
// Module options TypeScript interface definition
export interface ModuleOptions {
  defaultLocale?: string,
  messages?: Locale
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
    //! TODO: Fix this
    // messages: messages
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.vuetifyValidation = defu(nuxt.options.runtimeConfig.public.vuetifyValidation, options)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
