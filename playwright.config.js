// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html']],
  use: {
    headless: false,
    video: 'on', // ✅ ENABLE video recording
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    //{
     // name: 'firefox',
    // use: { ...devices['Desktop Firefox'] },
    //},
    //{
    //  name: 'webkit',
     // use: { ...devices['Desktop Safari'] },
   // },
  ],
});
