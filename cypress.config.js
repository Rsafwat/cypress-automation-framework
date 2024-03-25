const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout :9000,
  viewportWidth: 1280,
  viewportHeight: 800,
  projectId: "8d6vaz", 
  video             : false,            //Whether Cypress will capture a video of the tests run with cypress run.
  videosFolder      : 'cypress/videos',
  videoCompression  : false,            //The quality setting for the video compression, in Constant Rate Factor (CRF).
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportPageTitle": 'Test Report',
    "charts": true,
    "overwrite": false,
    "embeddedScreenshots": true, //Screenshot will be embedded within the report
    "html": false,
    "json": true,
    "reportDir": "cypress/report/mochawesome-report"
   },

env:{
  baseUrl: 'https://beta.workmotion.com/login',
  username: 'aliaa+qahrmanager@workmotion.com',
  password: 'Test1234',

},
retries: {
runMode: 1,

},
  e2e: {
   

    setupNodeEvents(on, config) {
     // Implement the launch event listener here
    
    },  
    testIsolation:false,
    specPattern:'cypress/e2e/tests/*.cy.js'
  },
});
