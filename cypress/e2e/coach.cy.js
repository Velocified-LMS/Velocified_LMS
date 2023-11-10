describe("Coach Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/coach");
    });
  
    it("Loads the Coach page", () => {
      cy.get("[data-cy=coach-page]").should("exist");
      //cy.get("[data-cy=navbar]").should("exist");
      cy.get("[data-cy=coach-container]").should("exist");
    });
  
  
    it("Toggles Change Path", () => {
        cy.contains("Change Path").should("exist");
        cy.contains("Change Path").click();
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
    
    //it("checks and verifies click for calendar button", () =>{
    //    cy.get('[data-cy=calendar-container]').should("be.visible");
    //    cy.get('[data-cy=calendar-image]').should("be.visible");
    //    cy.get('[data-cy=calendar-button]').click({force: true});
    //})

    it("checks and verifies click for vector button", () =>{
        cy.get('[data-cy=vector-container]').should("be.visible");
        cy.get('[data-cy=vector-image]').should("be.visible");
        cy.get('[data-cy=vector-button]').click({force: true});
    })
    
  });
  