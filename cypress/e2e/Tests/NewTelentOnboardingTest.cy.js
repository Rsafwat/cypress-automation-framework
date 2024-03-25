///<reference types="cypress"/>
import HomePage from "../Pages/HomePage"
import CountryPage from "../Pages/CountryPage"
import OnboardingPage from "../Pages/OnboardingPage"
import { completeOnboarding } from '../Helpers/onboardingProcess';

/**
 * This spec file contains tests for the employee onboarding process. It makes use of the Page Object Model by importing
 * pages such as HomePage, CountryPage, and OnboardingPage to interact with the application under test. It also
 * utilizes a helper function, completeOnboarding, from the onboardingProcess helper file for completing the onboarding
 * steps. Test data is loaded from the 'TalentDetails' fixture.
 * 
 * Tests include verifying successful onboarding for new talents under different conditions:
 * - Working from home (WFH) or in the office (WFO)
 * - Opting for full-time or part-time positions
 * 
 * Before each test, it initializes page object instances, loads test data, and navigates through initial onboarding steps
 * like selecting a country and opting for a global work option.
 */
describe('Employee Onboarding Tests', () => {
  // Page object instances

  let homePage;
  let countryPage;
  let onboardingPage;
  let testData;
  before(function () {
    cy.fixture('TalentDetails').then(function (data) {
      testData = data;
    });
  });
  beforeEach(function () {
    homePage = new HomePage();
    countryPage = new CountryPage();
    onboardingPage = new OnboardingPage();
    homePage.selectCreateNewItem();
    countryPage.selectCountryFromDropdownMenu(testData.countryname);
    countryPage.getStarted();
    onboardingPage.selectWorkGlobalOption();
  })

  it('Verifies successful onboarding for a new talent opting for WFH and a full-time position', () => {
    completeOnboarding('wfh', 'fullTime');
  });

  it('Verifies successful onboarding for a new talent opting for WFH and a part-time position', () => {
    completeOnboarding('wfh', 'partTime');

  });
  it('Verifies successful onboarding for a new talent opting for work for office and a full-time position', () => {
    completeOnboarding('wfo', 'partTime');

  });

  it('Verifies successful onboarding for a new talent opting for work for office and a part-time position', () => {
    completeOnboarding('wfo', 'partTime');

  });
});
