import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://miruankodra.github.io/portfolio",
  plugins: [react()],
  build: {
    outDir: 'dist', // Default is 'dist', but you can change it here.
  },
})
