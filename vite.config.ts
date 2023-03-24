import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcss from "./postcss.config.cjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: { postcss },
  server: {
    proxy: {
      "/api": {
        target: "http://amu:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
