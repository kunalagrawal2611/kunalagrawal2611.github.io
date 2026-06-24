import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    strictPort: true,
    port: 5173,
    watch: {
      ignored: ["**/DSC_*.{JPEG,jpeg,JPG,jpg}"],
    },
  },
});
