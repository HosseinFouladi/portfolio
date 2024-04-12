import { fileURLToPath, URL } from 'node:url'

import { defineConfig ,HttpProxy,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path'
const env=loadEnv('production','')
import {VitePWA} from 'vite-plugin-pwa';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  
    VitePWA({registerType:'autoUpdate',
    manifest: {
      name: 'personal-portfolio-vue',
      short_name: 'portfolio',
      description: 'My Awesome portfolio app',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'user-tie.svg',
          sizes: '192x192',
          type: 'image/png'
        }
      ]
    }})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // base: path.resolve(__dirname, "./dist/"),  
})
