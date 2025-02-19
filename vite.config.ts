import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [TanStackRouterVite(), svgr({ include: "**/*.svg?react" }), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/'
})
