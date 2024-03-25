/**
 * Represents a page object for the onboarding page.
 * This class provides methods to interact with various elements on the onboarding page,
 * such as selecting the WorkGlobal option as the beginning the onboarding process.
 */
class OnboardingPage {
    /**
     * Gets the WorkGlobal option element.
     * @returns A Cypress chainable object for the WorkGlobal option.
     */
    get workGlobalOption() {
        return cy.get('[data-cy="product-selection-workglobal-option"]');
    }

    /**
     * Gets the "Begin Onboarding" button.
     * @returns A Cypress chainable object for the "Begin Onboarding" button.
     */
    get begainOnboardingButton() {
        return cy.get('[data-cy="product-selection-begin-onboarding-btn"]');
    }

    /**
     * Selects the WorkGlobal option by clicking on it and then clicks on the "Begin Onboarding" button
     * to proceed with the onboarding process.
     */
    selectWorkGlobalOption() {
        this.workGlobalOption.click();
        this.begainOnboardingButton.click();
    }
}

export default OnboardingPage;
