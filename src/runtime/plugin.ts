import { defineNuxtPlugin } from '#app'
import { Validator } from './Validator';
import { useRuntimeConfig } from "#imports";
import type { ModuleOptions } from '../module';
import type { NuxtApp } from 'nuxt/app';

declare module "#app" {
	interface NuxtApp {
		$vv: typeof Validator;

	}
}

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig()

	return {
		provide: {
			'vv': (label: string) => {
				const validator: Validator = new Validator(nuxtApp as NuxtApp, config.public.vuetifyValidation as ModuleOptions);

				return validator.label(label);
			}
		},
	};
})
