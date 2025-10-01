import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

export default defineConfig(({ mode }) => ({
  base: "/saywhat-scroll-nav/",   // 👈 MUST match your repo name
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // 👇 Copies index.html → 404.html after build
    {
      name: "copy-404",
      closeBundle() {
        if (fs.existsSync("dist/index.html")) {
          fs.copyFileSync("dist/index.html", "dist/404.html");
          console.log("✅ 404.html created for SPA routing support");
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
