const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://certificadosfeciaq2022.vercel.app",
    downloadsFolder: "cypress/downloads",
  },
});
