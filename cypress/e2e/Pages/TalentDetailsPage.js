/**
 * Represents a page object for Talent Details form page within a web application.
 * This class encapsulates the selectors and methods for interacting with the Talent Details form.
 */
class TalentDetailsPage {
  /**
     * Initializes a new instance of the TalentDetailsPage class.
     * Loads test data from a fixture file named 'talentDetailsTestData.json'.
     */
  constructor() {
  //  cy.fixture('talentDetailsTestData').then((data) => {
      //  this.testData = data;
   // });
}
    /**
     * Gets the Cypress chainable for the first name input field.
     */
    get talentFirstNameInput() {
        return cy.get('[data-cy="steps-candidate-first-name-input"]');
    }

    /**
     * Gets the Cypress chainable for the last name input field.
     */
    get talentLastNameInput() {
        return cy.get('[data-cy="steps-candidate-last-name-input"]');
    }

    /**
     * Gets the Cypress chainable for the date of birth input field.
     */
    get talentDateOfBirthInput() {
        return cy.get('#\\31 ffb9724-40c5-3f5d-b7a3-5fb982b91455');
    }
   
    /**
     * Gets the Cypress chainable for the "Yes" radio button under work eligibility.
     */
    get talentWorkEligibilityYesRadioButton() {
        return cy.get('[data-cy="steps-talent-is-local-yes-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }

    /**
     * Gets the Cypress chainable for the "No" radio button under work eligibility.
     */
    get talentWorkEligibilityNoRadioButton() {
        return cy.get('[data-cy="steps-talent-is-local-no-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }

    /**
     * Gets the Cypress chainable for the "No" radio button for the executive status question.
     */
    get talentIsExecutiveNoRadioButton() {
        return cy.get('[data-cy="steps-talent-is-senior-no-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }

    /**
     * Gets the Cypress chainable for the "Yes" radio button under valid address verification.
     */
    get talentValidAddressYesRadioButton() {
        return cy.get('[data-cy="steps-address-selector-hr-yes-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }

    /**
     * Gets the Cypress chainable for the first line of the address input field.
     */
    get talentAddressLine1Input() {
        return cy.get('[data-cy="steps-address-line-one-hr-input"]');
    }

    /**
     * Gets the Cypress chainable for the state input field.
     */
    get talentStateInput() {
        return cy.get('[data-cy="steps-city-state-hr-input"]');
    }

    /**
     * Gets the Cypress chainable for the postal code input field.
     */
    get talentPostalCodeInput() {
        return cy.get('[data-cy="steps-postal-code-hr-input"]');
    }

    /**
     * Gets the Cypress chainable for the "No" radio button under work from home question.
     * Note: There was a typo in the method name, corrected to match the naming convention.
     */
    get talentWFHNoRadioButton() {
        return cy.get('[data-cy="steps-work-from-home-selector-no-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }

    /**
     * Gets the Cypress chainable for the "Yes" radio button under work from home question.
     */
    get talentWFHYesRadioButton() {
        return cy.get('[data-cy="steps-work-from-home-selector-yes-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }

    /**
     * Gets the Cypress chainable for the work address text area.
     */
    get talentWorkAddressTextArea() {
        return cy.get('[data-cy="steps-work-address-textarea"]');
    }

    /**
     * Gets the Cypress chainable for the continue button on the talent details form.
     */
    get talentDetailsContinueButton() {
        return cy.get('[data-cy="steps-continue-btn"]');
    }

    /**
     * Fills in the talent details form using the provided test data and whether the talent works from home.
     * @param {string} workPlace Specifies whether the talent works from home ("yes" or "no").
     */
    fillNewTalentDetailsForm(workPlace) {
        cy.readFile('./cypress/fixtures/TalentDetails.json').then((data) => {

            this.talentFirstNameInput.clear().type(data.firstName);
            this.talentLastNameInput.clear().type(data.lastName);
            this.talentDateOfBirthInput.click();           
            cy.setDate(data.dayOfBirth, data.monthOfBirth, data.yearOfBirth);
            this.talentWorkEligibilityYesRadioButton.check();
            this.talentIsExecutiveNoRadioButton.check();
            this.talentValidAddressYesRadioButton.check();
            this.talentAddressLine1Input.clear().type(data.addressLine1);
            this.talentStateInput.clear().type(data.state);
            this.talentPostalCodeInput.clear().type(data.postalCode);
            if (workPlace === "wfh") {
                this.talentWFHYesRadioButton.check();
            } else {
                this.talentWFHNoRadioButton.check();
                this.talentWorkAddressTextArea.clear().type(data.workAddress);
            }
            this.talentDetailsContinueButton.click();
        });
    }
}

export default TalentDetailsPage;