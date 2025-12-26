import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // Your existing Vite configuration
  test: {
    globals: true, // Allows using describe, it, expect without importing
    setupFiles: "./__tests__/setup.ts", // optional setup file
    passWithNoTests: true, // Prevents errors if no tests are found
  },
  plugins: [tsconfigPaths()],
});
