import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

export default defineConfig({
  // base: "/saywhat-scroll-nav/",   // 👈 Must match your repo name
  base: "./", // 👈 Use relative paths for GitHub Pages
  plugins: [
    react(),
    {
      name: "copy-404",
      closeBundle() {
        if (fs.existsSync("dist/index.html")) {
          fs.copyFileSync("dist/index.html", "dist/404.html");
          console.log("✅ 404.html created for SPA routing");
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
