import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@js': fileURLToPath(new URL('./src/js', import.meta.url)),
            '@helpers': fileURLToPath(new URL('./src/js/helpers', import.meta.url)),
            '@modules': fileURLToPath(new URL('./src/js/modules', import.meta.url)),
            '@scss': fileURLToPath(new URL('./src/scss', import.meta.url)),
            '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
            '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
            '@base': fileURLToPath(new URL('./src/components/base', import.meta.url)),
            '@blocks': fileURLToPath(new URL('./src/components/blocks', import.meta.url)),
            '@views': fileURLToPath(new URL('./src/components/views', import.meta.url)),
            '@icons': fileURLToPath(new URL('./src/components/icons', import.meta.url)),
        },
    },
})
