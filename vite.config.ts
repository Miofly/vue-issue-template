import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import VueMarcos from 'unplugin-vue-macros/vite';
import { NaiveUiResolver, VantResolver } from 'unplugin-vue-components/resolvers';
import { resolve, join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		VueMarcos(),
		vue(),
		Components({
			extensions: ['vue'],
			directoryAsNamespace: true,
			dts: resolve(process.cwd(), './components.d.ts'),
			resolvers: [NaiveUiResolver()],
			exclude: []
		})
	],
});
