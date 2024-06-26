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
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@contexts": path.resolve(__dirname, "./src/contexts"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@theme": path.resolve(__dirname, "./src/theme"),
        "@constants": path.resolve(__dirname, "./src/constants"),
        "@customTypes": path.resolve(__dirname, "./src/customTypes"),
        "@customIcons": path.resolve(__dirname, "./src/customIcons"),
      },
    },
  };
});
