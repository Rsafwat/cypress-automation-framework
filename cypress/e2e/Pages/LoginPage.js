/**
 * Represents the login page and its actions.
 */
class LoginPage {
  /**
   * Gets the email input field.
   * @return {Cypress.Chainable} A chainable Cypress object for the email input.
   */
  get emailInput() {
    return cy.get('#email');
  }

  /**
   * Gets the password input field.
   * @return {Cypress.Chainable} A chainable Cypress object for the password input.
   */
  get passwordInput() {
    return cy.get('#password');
  }

  /**
   * Gets the login button.
   * @return {Cypress.Chainable} A chainable Cypress object for the login button.
   */
  get loginButton() {
    return cy.get('[data-cy="login-login-btn"]');
  }

  /**
   * Navigates to the login page using the base URL from Cypress environment variables.
   */
  open() {
    cy.visit(Cypress.env('baseUrl'));
  }

  /**
   * Logs in using the provided username and password.
   * This method opens the login page, types in the credentials, and clicks the login button.
   * @param {string} username - The username for login.
   * @param {string} password - The password for login.
   */
  login(username, password) {
    this.open();
    this.emailInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();
  }
}

export default LoginPage;
