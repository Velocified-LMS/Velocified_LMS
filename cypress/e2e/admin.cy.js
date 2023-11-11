describe('Velocified Admin Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/admin');
    });
  
    it('should check the text', () => {
      
        cy.get('[data-cy=text-powered-by]').should("be.visible");
    });
  
    it('should open the Profile Editor modal', () => {
      // Click on the "Edit Profile" button
      cy.get('[data-testid=edit-profile-button]').click();
  
      cy.get('[data-testid=profile-editor-modal]').should('be.visible');
    });


  
    it("Shoukd view total number of seats", () => {
        cy.contains("Total # Seats").should("exist");
        cy.contains("Total # Seats").click();
    });

    it("Shoukd view total number of organizations", () => {
        cy.contains("Total # Organizations").should("exist");
        cy.contains("Total # Organizations").click();
    });

    it("Shoukd add the organization", () => {
        cy.contains("Add Organization").should("exist");
        cy.contains("Add Organization").click();
    });

    it("Should contain amazon", () => {
        cy.contains("Amazon").should("exist");
        cy.contains("Amazon").click();
    });

    it("Should contain google", () => {
        cy.contains("google").should("exist");
        cy.contains("google").click();
    });

    it("Should contain velocified", () => {
        cy.contains("Velocified").should("exist");
        cy.contains("Velocified").click();
    });


  });
  