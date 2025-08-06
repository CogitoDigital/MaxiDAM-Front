import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // ← ✅ INDISPENSABLE POUR VERCEL
  build: {
    outDir: 'dist'
  }
})
