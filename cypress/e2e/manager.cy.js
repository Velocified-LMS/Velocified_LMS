

describe("Manager Tests", () => {
    beforeEach(() => {

      cy.visit("http://localhost:3000/manager");

    });
  
    it("Loads the manager page and interacts with elements", () => {

      cy.get('[data-cy=dashboard-container]').should("be.visible");

      cy.get('[data-cy=profile-container]').should("be.visible");

      cy.get('[data-cy=profile-image]').should("be.visible");

      cy.get('[data-cy=text-powered-by]').should("be.visible");
  
      //cy.get('[data-cy=messages-button]').click();

      //cy.get('[data-cy=messenger-component]').should("be.visible");

      cy.get('[data-cy=messages-button]').click();

      cy.get('[data-cy=messenger-component]').should("not.exist");
  
      //cy.get('[data-cy=milestones-button]').click();

      //cy.get('[data-cy=milestone-component]').should("be.visible");

      //cy.get('[data-cy=milestones-button]').click();
      //cy.get('[data-cy=milestone-component]').should("not.exist");
  
      cy.get('[data-cy=profile-container]').should("be.visible");

      //cy.get('[data-cy=profile-editor-component]').should("be.visible");

      cy.get('[data-cy=edit-profile-button]').click();

      cy.get('[data-cy=profile-editor-component]').should("not.exist");
  

    });
  });
  