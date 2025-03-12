import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//const envVar = import.meta.env;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
