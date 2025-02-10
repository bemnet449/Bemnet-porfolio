import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-router-dom']
  },
  build: {
    target: 'esnext',  // Ensures compatibility with modern JavaScript features
  },
  resolve: {
    alias: {
      // Optional: Helps resolve issues with specific paths or libraries
      'react-router': 'react-router-dom'
    }
  }
})
