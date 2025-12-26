import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { MdBorderColor } from 'react-icons/md'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),
  ],
  
  
})
