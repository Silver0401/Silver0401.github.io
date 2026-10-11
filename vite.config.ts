import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Multi-página: "/" es IMC² y "/fundador/" es la página personal.
// Rutas estáticas reales: GitHub Pages las sirve sin hacks de 404.
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        fundador: resolve(__dirname, "fundador/index.html"),
      },
    },
  },
});
