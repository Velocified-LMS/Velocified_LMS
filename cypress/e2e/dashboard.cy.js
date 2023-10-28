describe("Dashboard Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/dashboard");
    });
  
    it("Loads the Dashboard page", () => {
      cy.get("[data-cy=dashboard-page]").should("exist");
      //cy.get("[data-cy=navbar]").should("exist");
      cy.get("[data-cy=dashboard-container]").should("exist");
    });
  
  
    it("Toggles Milestones View", () => {
        cy.contains("Milestones").should("exist");
        cy.contains("Milestones").click();
    });
      
  
    it("Toggles Messenger", () => {
        cy.contains("Messages").should("exist");
        cy.contains("Messages").click();
    });

    it("checks profile edit button", () =>{
        cy.get('[data-cy=profile-container]').should("be.visible");
        cy.get('[data-cy=profile-image]').should("be.visible");
        cy.get('[data-cy=edit-profile-button]').click({force: true});
    })
    
    it("Check and clicks path name", () => {
        cy.contains("Path Name").should("exist");
        cy.contains("Path Name").click();
    });

    it("checks and verifies click for calendar button", () =>{
        cy.get('[data-cy=calendar-container]').should("be.visible");
        cy.get('[data-cy=calendar-image]').should("be.visible");
        cy.get('[data-cy=calendar-button]').click({force: true});
    })

    it("checks and verifies click for vector button", () =>{
        cy.get('[data-cy=vector-container]').should("be.visible");
        cy.get('[data-cy=vector-image]').should("be.visible");
        cy.get('[data-cy=vector-button]').click({force: true});
    })
    
  });
  