///<reference types="cypress"/>
import HomePage from "../Pages/HomePage"
import CountryPage from "../Pages/CountryPage"
import OnboardingPage from "../Pages/OnboardingPage"
import { completeOnboarding } from '../Helpers/onboardingProcess';
const options = require('../../fixtures/testScenarios.json');

describe('Employee Onboarding Tests', () => {
  let homePage;
  let countryPage;
  let onboardingPage;

  beforeEach(function () {
    homePage = new HomePage();
    countryPage = new CountryPage();
    onboardingPage = new OnboardingPage();
    homePage.selectCreateNewItem();
    countryPage.selectCountryFromDropdownMenu(Cypress.env('countryName'));
    countryPage.getStarted();
    onboardingPage.selectWorkGlobalOption();
  });

  options.forEach(option => {
      it(`Verifies successful onboarding for a new talent opting for ${option.workMode} and a ${option.positionType} position`, function () {
        completeOnboarding(option.workMode,option.positionType);
      });
    });
  

});
