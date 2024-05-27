import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // depending on your application, base can also be "/"
    base: "/",
    envPrefix: "APP_",
    plugins: [
      react(),
      viteTsconfigPaths(), // Put the Sentry vite plugin after all other plugins
    ],
    build: {
      sourcemap: true,
    },
    server: {
      // this ensures that the browser opens upon server start
      open: true,
      // this sets a default port to 3000
      port: 3000,
    },
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
  };
});
