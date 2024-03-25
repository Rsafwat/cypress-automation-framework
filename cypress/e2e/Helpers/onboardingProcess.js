import HomePage from "../Pages/HomePage"
import TalentDetailsPage from "../Pages/TalentDetailsPage"
import EmploymentAgreementDetailsPage from "../Pages/EmploymentAgreementDetailsPage"
import EmploymentContractClausesPage from "../Pages/EmploymentContractClausesPage"
import EmploymentCompensationCalculationPage from "../Pages/EmploymentCompensationCalculationPage"
import TalentEmailInvitationPage from "../Pages/TalentEmailInvitationPage"
import EmploymentAgreementSummaryPage from "../Pages/EmploymentAgreementSummaryPage"


/**
 * Completes the onboarding process for a new talent by navigating through various pages
 * and filling out forms with details from the TalentDetails.json fixture.
 * 
 * The process includes:
 * - Filling in talent details, employment agreement, contract clauses,
 *   compensation calculation, and sending an email invitation.
 * - Confirming candidate information and navigating to the talent list.
 * - Verifying the onboarding entry and marking the item as received.
 *
 * This function leverages page objects for each step of the onboarding process,
 * encapsulating the interaction logic within respective page object methods.
 *
 * @param {string} workSetting - The work setting for the new talent (e.g., "WFH" for Work From Home).
 * @param {string} positionType - The type of position (e.g., "fullTime" or "partTime").
 * 
 * @example
 * // To complete onboarding for a talent opting for WFH and a full-time position
 * completeOnboarding("WFH", "fullTime");
 */
const completeOnboarding = (workSetting, positionType) => {
  // Page object instances
  const homePage = new HomePage();
  const talentDetailsPage = new TalentDetailsPage();
  const employmentAgreementDetailsPage = new EmploymentAgreementDetailsPage();
  const employmentContractClausesPage = new EmploymentContractClausesPage();
  const employmentCompensationCalculationPage = new EmploymentCompensationCalculationPage();
  const talentEmailInvitationPage = new TalentEmailInvitationPage();
  const employmentAgreementSummaryPage = new EmploymentAgreementSummaryPage();

  // Read and use data from the TalentDetails.json fixture
  cy.readFile('./cypress/fixtures/TalentDetails.json').then(function (data) {
    // Fill forms and navigate through the onboarding process steps
    talentDetailsPage.fillNewTalentDetailsForm(workSetting)
    employmentAgreementDetailsPage.fillEmploymentAgreementForm(positionType);
    employmentContractClausesPage.fillEmploymentContractClausesForm();
    employmentCompensationCalculationPage.fillEmploymentCompensationCalculationForm();
    talentEmailInvitationPage.fillNewTalentMailInvitation();
    employmentAgreementSummaryPage.confirmcandidateValidInformation();
    employmentAgreementSummaryPage.goToTalentList();
    homePage.openOnboardingList();
    homePage.talentNameEntry.contains(`${data.firstName} ${data.lastName}`).should('exist');
    homePage.markTheitemHasBeenRecieved();
    homePage.newEmplyeeReceivedItem.contains(`Your part of the data collection to onboard ${data.firstName} in Germany has been finished`).should('exist');
  });
};

export { completeOnboarding };
