class LoginPage {
  get emailInput() {
    return cy.get('#email')
  }
  get passwordInput() {
    return cy.get('#password')
  }
  get loginButton() {
    return cy.get('[data-cy="login-login-btn"]')
  }

  open() {
    cy.visit(Cypress.env('baseUrl'));
  }

  login(username, password) {
    this.open()
    this.emailInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();
  }
}

export default LoginPage;
