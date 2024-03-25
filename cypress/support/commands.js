// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
/**
 * Custom Cypress command to set a date on a date picker component.
 * This command assumes the date picker is implemented with Material-UI and has specific class names for its elements.
 * The command first opens the year picker, then selects the specified year and month, and finally selects the day.
 *
 * @param {String} day - The day of the month to select. Must be a valid day for the given month and year.
 * @param {String} monthNumber - The month to select, where January is 1 and December is 12.
 * @param {String} year - The year to select.
 * 
 * Usage:
 * cy.setDate('15', '4', '2023'); // Sets the date to April 15, 2023
 */
Cypress.Commands.add('setDate', (day, monthNumber, year) => {
    cy.get(".MuiPickersCalendarHeader-switchViewButton").click();
    cy.contains("button", year).click();
    for (let i = 0; i < Number(monthNumber) - 1; i++) {
        cy.get('button[title="Next month"]').click();
    }
    cy.contains(".css-ub1r1", day).click();
})

/**
 * Generates a unique email address by appending the current timestamp to the base email.
 * This ensures that each email address used in tests is unique
 * and allowing for individual test case validation
 *
 * @param {string} baseEmail The base email address to which the timestamp will be appended.
 *                            The timestamp is inserted before the "@" symbol to maintain
 *                            a valid email format.
 * @returns {string} A uniquely modified email address based on the input baseEmail.
 */
Cypress.Commands.add('generateUniqueEmail', ( baseEmail) => { 
    const timestamp = Date.now();
  const uniqueEmail = baseEmail.replace('@', `_${timestamp}@`);
  return uniqueEmail;
})
    
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })