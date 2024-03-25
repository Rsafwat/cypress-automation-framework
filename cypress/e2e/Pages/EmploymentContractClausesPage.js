/**
 * Represents the Employment Contract Clauses form page in the application.
 * This class provides methods to interact with various elements on the Employment Contract Clauses page.
 */
class EmploymentContractClausesPage {

    /**
     * Gets the 'Yes' radio button for the talent probationary period selector.
     *
     */
    get talentProbationaryPeriodYesRadioButton() {
        return cy.get('[data-cy="steps-probation-period-selector-yes-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }
/**
     * Gets the Cypress chainable for the continue button on the talent Employment Contract Clauses form.
     */
get EmploymentContractClausesContinueButton() {
    return cy.get('[data-cy="steps-continue-btn"]');
}
    /**
     * Fills the Employment Contract Clauses form by selecting the 'Yes' option for the talent probationary period.
     * This method simulates a user interaction with the 'Yes' radio button for the talent probationary period.
     */
    fillEmploymentContractClausesForm() {
        this.talentProbationaryPeriodYesRadioButton.check();
        this.EmploymentContractClausesContinueButton.click();
    }
}

export default EmploymentContractClausesPage;
