/**
 * Represents a page object for the employment agreement summary page.
 * This class provides methods to interact with various elements on the employment agreement summary page,
 * such as confirming candidate information and finishing the agreement form.
 */
class EmploymentAgreementSummaryPage {
    /**
     * Gets the checkbox button for confirming candidate's valid information.
     * @returns A Cypress chainable object for the confirm candidate valid information checkbox button.
     */
    get candidateValidInfoConfirmCheckButton() {
        return cy.get('.sc-gtsqUy');
    }

    /**
     * Gets the finish button for the employment agreement form.
     * @returns A Cypress chainable object for the employment agreement form finish button.
     */
    get EmploymentAgreementFormFinishButton() {
        return cy.get('[data-cy="steps-finish-btn"]');
    }

    /**
     * Gets the button to go to the talent list.
     * @returns A Cypress chainable object for the go to talent list button.
     */
    get goToTalentListButton() {
        return cy.get('[data-testid="go-to-talent-list-btn"]');
    }

    /**
     * Confirms the candidate's valid information by checking the respective checkbox and clicking the finish button on the employment agreement form.
     */
    confirmcandidateValidInformation() {
        this.candidateValidInfoConfirmCheckButton.click();
        this.EmploymentAgreementFormFinishButton.click();
    }

    /**
     * Navigates to the talent list by clicking the respective button.
     */
    goToTalentList() {
        this.goToTalentListButton.click();
    }
}

export default EmploymentAgreementSummaryPage;
