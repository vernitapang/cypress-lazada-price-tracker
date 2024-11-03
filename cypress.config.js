const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 1000,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.lazada.com.ph/'
  },
});
