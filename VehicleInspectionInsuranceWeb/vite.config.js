import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // Add React plugin to handle JSX
  resolve: {
    extensions: [".js", ".jsx"], // Enable JSX file resolution
  },
});
