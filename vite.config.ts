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
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				// 在全局less文件后面添加变量的配置。modifyVars 对应的对象属性名会加上@追加到less文件后。
				modifyVars: {
					hack: `true; @import (reference) "${resolve(`./src/index.less`)}";`
				}
			}
		},
	}
});
