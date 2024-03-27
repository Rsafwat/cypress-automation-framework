import { faker } from '@faker-js/faker';

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
   * Fills in the Employment Compensation Calculation form with preset options and a randomly generated base salary. 
   * Non-salary fields are set to "No" by checking corresponding radio buttons. The base salary is generated using 
   * faker within a range of 1000 to 50000 and entered into the form. After filling the form, it clicks the 
   * continue button to proceed.
   *
   * Preconditions:
   * - The `faker` library must be available.
   * */
    fillEmploymentCompensationCalculationForm() {
        this.privateHealthInsuranceNoRadioButton.check();
        this.employeeStockOptionsPlanNoRadioButton.check();
        this.baseSalaryInput.clear().type(faker.finance.amount({ min: 1000, max: 50000 }));
        this.fixedBounsNoRadioButton.check();
        this.variableBounsNoRadioButton.check();
        this.recieveAllowancesNoRadioButton.check();
        this.employmentCompensationCalContinueButton.click();

    }
}

export default EmploymentCompensationCalculationPage;
