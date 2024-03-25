/**
 * Represents the Employment Agreement Details page and provides methods to interact with it.
 * This page object class allows for fetching specific elements on the page and filling out the employment agreement form with data.
 */
class EmploymentAgreementDetailsPage {
    /**
     * Gets the job title input field.
     * @returns Cypress chainable containing the job title input element.
     */
    get jobTitleInput() {
        return cy.get('[data-cy="steps-job-title-input"]');
    }

    /**
     * Gets the job description text area.
     * @returns Cypress chainable containing the job description text area element.
     */
    get jobDescripionTextArea() {
        return cy.get('[data-cy="steps-job-description-textarea"]');
    }

    /**
     * Gets the job description in Germany text area.
     * Note: It seems this getter is duplicated; consider removing the duplicate.
     * @returns Cypress chainable containing the job description in Germany text area element.
     */
    get jobDescripionInGermanyTextArea() {
        return cy.get('[data-cy="steps-job-description-local-language-textarea"]')
    }
    /**
     * Gets the Cypress chainable for the contract start date input field.
     */
    get contactStartDateInput() {
        return cy.get('#\\37 0c79f8a-3dbf-375d-bba7-68f1a625c41e');
    }
    /**
     * Gets the Cypress chainable forthe contract end date input field.
     */
    get contactEndDateInput() {
        return cy.get('#\\35 b942d27-7835-3871-866c-2c112fd28b4a')
    }

    /**
     * Gets the full-time employment type radio button.
     * @returns Cypress chainable containing the full-time employment type radio button element.
     */
    get employmentFullTimeTypeRadioButton() {
        return cy.get('[data-cy="steps-employment-type-full-time-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }

    /**
     * Gets the part-time employment type radio button.
     * @returns Cypress chainable containing the part-time employment type radio button element.
     */
    get employmentPartTimeTypeRadioButton() {
        return cy.get('[data-cy="steps-employment-type-part-time-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }

    /**
     * Gets the fixed-term contract type radio button.
     * @returns Cypress chainable containing the fixed-term contract type radio button element.
     */
    get contractFixedTermTypeRadioButton() {
        return cy.get('[data-cy="steps-contract-type-fixed-term-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }

    /**
     * Gets the signatory name input field.
     * @returns Cypress chainable containing the signatory name input element.
     */
    get signatoryNameInput() {
        return cy.get('[data-cy="steps-signatory-full-name-input"]');
    }

    /**
     * Gets the signatory title input field.
     * @returns Cypress chainable containing the signatory title input element.
     */
    get signatoryTitleInput() {
        return cy.get('[data-cy="steps-signatory-title-input"]');
    }
    /**
    * Gets the emplyment agrrement form continue button.
    * @returns Cypress chainable containing the Employment Agreement Continue Button element.
    */
    get EmploymentAgreementContinueButton() {

        return cy.get('[data-cy="steps-continue-btn"]')

    }

    /**
     * Fills the form on the Employment Agreement Details page with data from a fixture.
     * Uses the employment type to decide which radio button to check.
     * @param {string} employmentType - The type of employment ('fullTime' or 'partTime').
     */
    fillEmploymentAgreementForm(employmentType) {
        cy.readFile('./cypress/fixtures/employmentAgreementDetails.json').then((data) => {
            this.jobTitleInput.clear().type(data.jobTitle);
            this.jobDescripionTextArea.clear();
            data.jobDescription.forEach(task => {
                this.jobDescripionTextArea.type(`${task}, `);
            });
            this.jobDescripionInGermanyTextArea.clear();
            data.jobDescriptionInGermany.forEach(task => {
                this.jobDescripionInGermanyTextArea.type(`${task}, `);
            });
            if (employmentType === 'fullTime') {
                this.employmentFullTimeTypeRadioButton.check();
            } else if (employmentType === 'partTime') {
                this.employmentPartTimeTypeRadioButton.check();
            }
            this.contractFixedTermTypeRadioButton.check();
            this.contactStartDateInput.click();
            cy.setDate(data.contractStartDate.day, data.contractStartDate.month, data.contractStartDate.year);
            this.contactEndDateInput.click();
            cy.setDate(data.contractEndDate.day, data.contractEndDate.month, data.contractEndDate.year);
            this.signatoryNameInput.clear().type(data.signatory.name);
            this.signatoryTitleInput.clear().type(data.signatory.title);
            this.EmploymentAgreementContinueButton.click();
        });
    }
}

export default EmploymentAgreementDetailsPage;
