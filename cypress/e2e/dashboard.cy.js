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
  
    
  });
  