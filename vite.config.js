import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: "/MEDECO-Knowledge/",

      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: 'styles', replacement: path.resolve(__dirname, 'src/styles') },
        {
          find: 'modules',
          replacement: path.resolve(__dirname, 'src/modules')
        },
        { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
        {
          find: '~bootstrap',
          replacement: path.resolve(__dirname, 'node_modules/bootstrap')
        },
      ],
    

    build: {
      outDir: 'build'
    },

    plugins: [react()],

    test: {
        globals:true,
        environment: 'jsdom',
        setupFiles: '.src/setupTests.js',
    },

    esbuild: {
        loader: 'jsx',
    },
    resolve:{
        alias:{
            './runtimeConfig': './runtimeConfig.browser',
        },
    },
    optimizeDeps: {
        esbuildOptions:
        {loader: {
            '.js': 'jsx',
        },
        }},
    })