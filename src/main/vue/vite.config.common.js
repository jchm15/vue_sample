import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default {
    plugins: [vue()],
    resolve: {
        alias: [
            { find: '@', replacement: resolve(__dirname, 'src') },
            {
                find: '@components',
                replacement: resolve(__dirname, 'src/components'),
            },
            {
                find: '@utils',
                replacement: resolve(__dirname, 'src/utils'),
            },
            {
                find: '@assets',
                replacement: resolve(__dirname, 'src/assets'),
            },
            {
                find: '@api',
                replacement: resolve(__dirname, 'src/api'),
            },
        ],
    },
};
