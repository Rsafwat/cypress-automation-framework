import { faker } from '@faker-js/faker';
/**
 * Represents a page object for Talent Details form page within a web application.
 * This class encapsulates the selectors and methods for interacting with the Talent Details form.
 */
class TalentDetailsPage {

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
     * Gets the Cypress chainable for the date of birth button.
     */
    get talentDateOfBirthButton() {
        return cy.get('[data-cy="steps-date-of-birth-hr-input"]');
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
     * Gets the Cypress chainable for the "No" radio button for the executive status question.
     */
 get talentIsExecutiveYesRadioButton() {
    return cy.get('[data-cy="steps-talent-is-senior-yes-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input');
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
 * Fills in the new talent details form with dynamic test data.
 * It generates and sets values for the talent's first name, last name, date of birth, work eligibility,
 * executive status, address, state, postal code, and work from home preference.
 * 
 * @param {string} workPlace - Determines the talent's work preference, accepts 'wfh' for work from home.
 * 
 * Utilizes `faker` to generate realistic test data for the form fields.
 * The `setDateOfBirth` method is called to set a random date of birth.
 * Based on the `workPlace` parameter, it sets the talent's work from home preference.
 * Finally, it submits the form by clicking the continue button.
 */

    fillNewTalentDetailsForm(workPlace) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        Cypress.env('firstName', firstName);
        Cypress.env('lastName', lastName);
        this.talentFirstNameInput.clear().type(firstName);
        this.talentLastNameInput.clear().type(lastName);
        this.setDateOfBirth();
        this.talentWorkEligibilityYesRadioButton.check();
        this.talentIsExecutiveNoRadioButton.check();
        this.talentValidAddressYesRadioButton.check();
        this.talentAddressLine1Input.clear().type(faker.location.streetAddress());
        this.talentStateInput.clear().type(faker.location.state());
        this.talentPostalCodeInput.clear().type(faker.location.zipCode());
        if (workPlace === "wfh") {
            this.talentWFHYesRadioButton.check();
        } else {
            this.talentWFHNoRadioButton.check();
            this.talentWorkAddressTextArea.clear().type(faker.location.secondaryAddress());
        }

        this.talentDetailsContinueButton.click();
       
    }
    /**
     * Sets the date of birth for a talent profile.
     * This method generates a random date of birth within a specified range and sets it in the form.
     * 
     * How it works:
     * 1. Generates a random birthdate using Faker, within the years 1980 to 2000.
     * 2. Clicks on the talent date of birth button to activate the date input fields.
     * 3. Calls a custom Cypress command `setDate` to type the generated day, month, and year into their respective fields.
     * */
    setDateOfBirth() {
        const birthdate = faker.date.birthdate({ min: 1980, max: 2000, mode: 'year' });
        this.talentDateOfBirthButton.click();
        cy.setDate(birthdate.getDate(), birthdate.getMonth() + 1, birthdate.getFullYear());



    }
}



export default TalentDetailsPage;