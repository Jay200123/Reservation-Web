import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],

    alias: {
      "@": "/src",
      "@components": "/src/@components",
      "@constants": "/src/@constants",
      "@helpers": "/src/@helpers",
      "@layouts": "/src/@layouts",
      "@pages": "/src/@pages",
      "@state": "/src/@state",
      "@types": "/src/@types",
      "@utils": "/src/@utils",
    },
  },
});
