import type { PlaywrightTestConfig } from '@playwright/test'

import EnvironmentConfig from '@/environment/EnvironmentConfig'


/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000,
  },

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    }
  ],

  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
  ],

  /* Retry on CI only */
  retries: 2,

  testDir: './tests/e2e',

  /* Maximum time one test can run for. */
  timeout: 90000,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 20000,

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: EnvironmentConfig.getCodereUrl(),

    headless: true,

    /* To avoid HTTPS warning with Firefox security : we ignore HTTPS errors with Web Browser */
    ignoreHTTPSErrors: true,

    navigationTimeout: 30000,

    screenshot: { fullPage: true, mode: 'on' },

    /* Retain the trace on each failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',

    video: { mode: 'on', size: { height: 1080, width: 1920 } },

    viewport: { height: 1080, width: 1920 },
  },
}

export default config
