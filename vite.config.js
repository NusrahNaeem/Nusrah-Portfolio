// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// export default defineConfig({
//   plugins: [react()],
//   base: process.env.NODE_ENV === 'production' 
//     ? "/Nusrah-Portfolio/"  // ← Fixed this line
//     : "/",
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   server: {
//     historyApiFallback: true,
//   },
//   preview: {
//     historyApiFallback: true,
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  base: "/Nusrah-Portfolio/", // Simple static base (remove the conditional)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

