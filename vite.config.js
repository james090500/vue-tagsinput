import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [cloudflare(), vue(), eslint()],
    build: {
        cssCodeSplit: false,
        lib: {
            entry: './src/index.js',
            name: '@james090500/vue-tagsinput',
            fileName: 'vue-tagsinput',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
