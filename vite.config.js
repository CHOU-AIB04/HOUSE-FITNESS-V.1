import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/HOUSE-FITNESS-V.1/",
  plugins: [react()],
})
