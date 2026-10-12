import { tmpdir } from 'node:os'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  cacheDir: resolve(tmpdir(), 'ssschol-vite-cache'),
  plugins: [
    react(),
    tailwindcss(),
  ],
})