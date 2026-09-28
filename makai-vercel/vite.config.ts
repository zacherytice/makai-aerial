import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    watch: { usePolling: true, interval: 150 },
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [tanstackStart(), nitro(), react()],
});
