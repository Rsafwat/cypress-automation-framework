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
    // testData is loaded in the 'before' hook, so it will be available here
    // Assume we're selecting a default country for each test to simplify
    countryPage.selectCountryFromDropdownMenu("Germany");
    countryPage.getStarted();
    onboardingPage.selectWorkGlobalOption();
  });

  options.forEach(option => {
      it(`Verifies successful onboarding for a new talent opting for ${option.workMode} and a ${option.positionType} position`, function () {
        completeOnboarding(option.workMode,option.positionType);
      });
    });
  

});
