// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import LoginPage from '../e2e/Pages/LoginPage';

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
before(() => {
  // Logs a message at the very start of the test run
  cy.log('E2E testing has started. Preparing to execute test suites...');
});

/**
 * Global beforeEach hook for Cypress E2E tests.
 * This hook runs before each test across all test suites.
 * It's responsible for ensuring a clean state by clearing cookies and local storage,
 * which helps prevent state leakage between tests and ensures that each test
 * starts under similar conditions.
 */

beforeEach(() => {
  const loginPage = new LoginPage();
  cy.clearCookies();
  cy.clearLocalStorage();
  loginPage.login(Cypress.env('username'), Cypress.env('password'));


});