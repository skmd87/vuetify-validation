import { defineNuxtPlugin } from '#app'
import { Validator } from './Validator';
import { useRuntimeConfig } from "#imports";
import type { ModuleOptions } from '../module';

// declare module "#app" {
// 	interface NuxtApp {
// 		$vv: Validator;

// 	}
// }

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig()

	const validator: Validator = new Validator(nuxtApp, config.public.vuetifyValidation as ModuleOptions);
	return {
		provide: {
			'vv': validator
		},
	};
})
