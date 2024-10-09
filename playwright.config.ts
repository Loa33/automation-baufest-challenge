import { defineConfig } from "@playwright/test";


export default defineConfig({
  use: {
    trace: "on",
    video: "on",
    screenshot: "on",
    deviceScaleFactor: undefined,
        viewport: null,
        launchOptions: {
          args: ['--start-maximized']
        },
  },
  retries: 1,
});

