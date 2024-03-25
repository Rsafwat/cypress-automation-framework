/**
 * Represents the Home page of the workmotion web application.
 * This class provides methods to interact with various elements on the Home page, particularly related to the talent management features.
 */
class HomePage {
    /**
     * Gets the menu for adding new talent.     * 
     * @returns  Cypress chainable object representing the add talent menu.
     */
    get addTalentMenu() {
        return cy.get('[data-testid="add-employee-menu"]');
    }

    /**
     * Gets the menu item for creating a new talent entry.
     * @returns The Cypress chainable object representing the create new talent menu item.
     */
    get createNewTalentMenuItem() {
        return cy.get('[data-testid="create-new-item"]');
    }

    /**
       * Gets talents link .
       * @returns The Cypress chainable object representing talents link.
       */
    get talentsLink() {
        return cy.get('[data-cy="sidebar-talents-link"]');
    }
    /**
 * Represents a link to action items in the sidebar.
 * @returns  Action items link.
 */
    get actionItemsLink() {
        return cy.get('[data-cy="sidebar-action-items-link"]');
    }

    /**
     * Represents the notifications button in the header.
     * @returns Notifications button.
     */
    get notificationsButton() {
        return cy.get('[data-cy="header-notifications-button"]');
    }

    /**
     * Represents the button to mark all notifications as read.
     * @returns  Mark as read button.
     */
    get markAsReadButton() {
        return cy.contains('Mark all as read');
    }
    /**
       * Represents the button to mark all notifications as read.
       * @returns  Mark as read button.
       */
    get newEmplyeeReceivedItem() {
        return cy.get('.sc-dkuFWL.WglQN');
    }
    /**
        * Gets onboardins tab for the new candidates.
        * @returns The Cypress chainable object representing onBoardings tab.
        */
    get onBoardingsTab() {
        return cy.contains('Onboardings');
    }
    /**
         * Gets talent name entry on onBoarign tab.
         * @returns The Cypress chainable object representing talent name within onboarding talent list.
         */
    get talentNameEntry() {
        return cy.get('[data-cy="talents-name-cell"]');
    }

    /**
          * Gets log out button.
          * @returns The Cypress chainable object representing log out button element.
          */
    get logoutButton() {
        return cy.get('[data-cy="sidebar-logout-btn"]');
    }


    /**
     * Selects the option to create a new talent entry from the add talent menu.
     * This method simulates user actions to first open the add talent menu and then select the create new talent menu item.
     */
    selectCreateNewItem() {
        this.addTalentMenu.click();
        this.createNewTalentMenuItem.click();
    }
    /**
         * opens on boarding tabl where new talents are listed.
         */
    openOnboardingList() {
        this.talentsLink.click();
        this.onBoardingsTab.click();

    }

    /**
         * mark the items of new emplyee has been recieved.
         */
    markTheitemHasBeenRecieved() {
        this.actionItemsLink.click();
        this.notificationsButton.first().click();
        this.markAsReadButton.click();

    }
    /**
        * method to log out from workmotion application.
        */
    logout() {
        this.logoutButton.click();

    }
}

export default HomePage;
