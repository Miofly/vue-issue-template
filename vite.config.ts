import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import VueMarcos from 'unplugin-vue-macros/vite';

function test() {
	throw 123
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		VueMarcos(),
		vue(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
});
