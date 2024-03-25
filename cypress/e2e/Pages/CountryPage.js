/**
 * Represents the country selection page within a web application.
 * This class provides methods to interact with the country dropdown,
 * select a country, and navigate using the get started button.
 */
class CountryPage {

    /**
     * Gets the country dropdown element.
     * @returns {Cypress.Chainable} A Cypress chainable object targeting the country dropdown.
     */
    get countryDropdown() {
        return cy.get('.css-19bb58m');
    }

    /**
     * Gets the list of countries from the dropdown.
     */
    get countriesList() {
        return cy.get('.css-1joffuw-option');
    }

    /**
     * Gets the "Get Started" button element.
     */
    get getStartedButton() {
        return cy.get('[data-cy="country-selection-get-started-btn"]');
    }

    /**
     * Selects a country from the dropdown menu by typing the country name and clicking the matched option.
     * @param {string} countryName - The name of the country to select.
     */
    selectCountryFromDropdownMenu(countryName) {
        this.countryDropdown.type(countryName);
        this.countriesList
            .filter(`:contains("${countryName}")`)
            .click();
    }

    /**
     * Clicks the "Get Started" button to proceed after selecting a country.
     */
    getStarted() {
        this.getStartedButton.click();
    }
}

export default CountryPage;
