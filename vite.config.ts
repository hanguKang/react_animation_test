import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import tailwind from '@tailwindcss/vite';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      //jsxImportSource: '@emotion/react',
      babel: { //     --> 각 .tsx파일의 emotion으로 css를 활용할 때 /** @jsxImportSource @emotion/react */ 문서 최초에 넣는 것을 대신 vite.config에서 설정한다.  
        plugins: [
          ['@emotion/babel-plugin', { sourceMap: true }]
        ]
      }
      
    }), 
   tailwind(),
  ],
  // esbuild: {
  //   jsxInject: `import React from 'react'`,
  // },
 resolve: {
    alias: {
      // __dirname 대신 path.resolve와 import.meta.url 사용
      '@': path.resolve(__dirname, 'src'), // 이렇게 변경!
      // '@/components': path.resolve(__dirname, 'src/components'),
      // '@/types': path.resolve(__dirname, 'src/types'),
      // '@/styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          emotion: ['@emotion/react', '@emotion/styled'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
  },
});
