import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ this is the correct base for Netlify/Vercel
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
