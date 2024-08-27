import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// Exporting the configuration for Vite and Vitest
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
  },
  test: {
    globals: true,
    setupFiles: './src/__tests__/setupTests.ts',
    environment: 'jsdom',
  },
})
