/**
 * Represents a page object class for handling operations on the Employment Compensation Calculation form page.
 * This class includes methods to interact with various form elements like radio buttons, input fields,
 * and the continue button.
 *
 */
class EmploymentCompensationCalculationPage {

    /**
     * Gets the  'No' radio button for Private Health Insurance.
     * @returns The chainable object for the specified radio button.
     */
    get privateHealthInsuranceNoRadioButton() {
        return cy.get('[data-cy="steps-benefit-private-health-insurance-selector-no-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }

    /**
     * Gets the the 'No' radio button under Employee Stock Options Plan (ESOP).
     * @returns The chainable object for the specified radio button.
     */
    get employeeStockOptionsPlanNoRadioButton() {
        return cy.get('[data-cy="steps-esop-provided-no-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }

    /**
     * Gets the  the base salary input field.
     * @returns The chainable object for the base salary input field.
     */
    get baseSalaryInput() {
        return cy.get('[data-cy="steps-salary-gross-salary-input"]');
    }

    /**
     * Gets the  the 'No' radio button for Fixed Bonus.
     * @returns The chainable object for the fixed bouns no radio button.

     */
    get fixedBounsNoRadioButton() {
        return cy.get('[data-cy="steps-annual-bonus-selector-no-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }

    /**
     * Gets the Cypress  the 'No' radio button for Variable Bonus.
     * @returns The chainable object for the variable Bouns No Radio Button.
     */
    get variableBounsNoRadioButton() {
        return cy.get('[data-cy="steps-variable-bonus-selector-no-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }
    /**
     * Gets the Cypress  the 'No' radio button for talent recieve allowance.
     * @returns The chainable object for talent recieve allowance.
     */
    get recieveAllowancesNoRadioButton() {
        return cy.get('[data-cy="steps-allowances-selector-no-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }
    /**
     * Gets the Cypress chainable for the continue button on the employment compensation calculation  form.
     * @returns The chainable object for the continue button.
     */
    get employmentCompensationCalContinueButton() {
        return cy.get('[data-cy="steps-continue-btn"]');
    }

    /**
     * Fills out the Employment Compensation Calculation form using the test data loaded from the fixture.
     * Checks radio buttons, types into input fields, and clicks the continue button to proceed.
     */
    fillEmploymentCompensationCalculationForm() {
        cy.readFile('./cypress/fixtures/EmploymentCompensationCalculation.json').then((data) => {
            this.privateHealthInsuranceNoRadioButton.check();
            this.employeeStockOptionsPlanNoRadioButton.check();
            this.baseSalaryInput.clear().type(data.basesalary);
            this.fixedBounsNoRadioButton.check();
            this.variableBounsNoRadioButton.check();
            this.recieveAllowancesNoRadioButton.check();
            this.employmentCompensationCalContinueButton.click();
        });
    }
}

export default EmploymentCompensationCalculationPage;
