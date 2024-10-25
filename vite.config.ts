import { createApp } from "vinxi";
import { config } from "vinxi/plugins/config";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vite';

export default createApp({
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public",
    },
    {
      name: "client",
      type: "spa",
      handler: "./index.html",
      base: "/",
      plugins: () => [
        config("custom", {}),
      ],
    },
  ],
});

const __dirname = dirname(fileURLToPath(import.meta.url));

export const viteConfig = defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  }
});
