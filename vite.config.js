import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "/src/styles/_variables.scss" as *;
          @use "/src/styles/_mixins.scss" as *;
        `
      }
    }
  }
})
