import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'
import { nitro } from 'nitro/vite'
import contentCollections from '@content-collections/vite'

const config = defineConfig({
  plugins: [
    contentCollections(),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    // Only on Netlify's servers
    ...(process.env.NETLIFY ? [netlify()] : []),
    tanstackStart(),
    // Only on Vercel's servers (Vercel sets VERCEL during builds)
    ...(process.env.VERCEL ? [nitro()] : []),
    viteReact(),
  ],
})

export default config