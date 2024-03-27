import { faker } from '@faker-js/faker';
/**
 * Represents the page for sending email invitations to talents.
 * This class includes methods for interacting with the UI elements
 * of the talent email invitation page
 */
class TalentEmailInvitationPage {
    /**
     * Gets the Cypress chainable object for the talent email input element.
     * @returns {Cypress.Chainable} A reference to the email input element.
     */
    get talentEmailInput() {
        return cy.get('[data-cy="steps-candidate-email-input"]');
    }

    /**
     * Gets the Cypress chainable object for the continue button on the talent email invitation form.
     * @returns {Cypress.Chainable} A reference to the continue button element.
     */
    get talentEmailInvitationContinueButton() {
        return cy.get('[data-cy="steps-continue-btn"]');
    }

    /**
     * Fills in the new talent's email invitation form with the email from the loaded test data
     * and clicks the continue button to proceed with the invitation process.
     */
    fillNewTalentMailInvitation() {

        this.talentEmailInput.clear().type(faker.internet.email());
        this.talentEmailInvitationContinueButton.click();
    }

}

export default TalentEmailInvitationPage;
