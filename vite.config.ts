import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const base = mode === "production" ? "/Website/" : "/";
    return {
      base,
      plugins: [react()],
    };
});
