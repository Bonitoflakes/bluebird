import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  return {
    esbuild: {
      pure: mode === "production" ? ["console.log"] : [],
    },
    plugins: [
      svgr({
        svgrOptions: {
          exportType: "default",
        },
      }),
      react(),
    ],
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "./assets"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@contexts": path.resolve(__dirname, "./src/contexts"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@types": path.resolve(__dirname, "./src/types"),
      },
    },
  };
});
