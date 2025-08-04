import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: './', // 👈 importante para builds em hospedagem tradicional
  plugins: [react()],
})