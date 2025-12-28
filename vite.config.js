import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",   // ⭐ 關鍵
  plugins: [react()],
});
