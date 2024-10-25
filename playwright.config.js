// config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // directory where your tests are stored
  timeout: 80000,     // max test time of 30 seconds
  expect: {
    timeout: 5000     // max wait time for expect assertions
  },
  //retries: 1,         // retry failed tests once
  reporter: 'html',   // generates a report in HTML format
  use: {
    headless: false,         // run in headless mode
    viewport: { width: 1280, height: 720 },  // browser window size
    ignoreHTTPSErrors: true, // ignore HTTPS errors
    video: 'on-first-retry', // record video on first retry
    screenshot: 'only-on-failure', // take screenshots on failure
    baseURL: 'https://www.mypersonalizedjewelry.us/', // base URL for tests
    launchOptions: {
      slowMo: 50,  // slow down actions for debugging
    },
  },
  projects: [
    {
      name: 'chromium',   // test in Chromium (Chrome)
      use: { browserName: 'chromium' },
     }
    //,
    // {
    //   name: 'firefox',    // test in Firefox
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'webkit',     // test in WebKit (Safari)
    //   use: { browserName: 'webkit' },
    // },
  ],
});
