import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      // whenever frontend calls `/api/...`, forward it to backend
      '/api': {
        target: 'http://localhost:8000', // change 8000 to your backend port
        changeOrigin: true,
      },
    },
  },
})
