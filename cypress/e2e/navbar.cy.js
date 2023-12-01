// cypress/integration/navbar.spec.js
describe('Navbar', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    context('Navigation Links', () => {
      it('should navigate to Home when Home link is clicked', () => {
        cy.contains(`Home`).should('exist');
        cy.contains(`Home`).click();
      });
  
      it('should navigate to About when About link is clicked', () => {
        cy.contains(`About`).should('exist');
        cy.contains(`About`).click();
      });
  
      it('should navigate to Training when Training link is clicked', () => {
        cy.contains(`Training`).should('exist');
        cy.contains(`Training`).click();
      });
  
      it('should navigate to News when News link is clicked', () => {
        cy.contains(`News`).should('exist');
        cy.contains(`News`).click();
      });
  
      it('should navigate to FR when FR link is clicked', () => {
        cy.contains(`FR`).should('exist');
        cy.contains(`FR`).click();
      });
  
      it('should toggle between Log In and Logout based on user state', () => {
        cy.contains(`Log in`).should('exist');
        cy.contains(`Log in`).click();
  

      });
    });
  
    context('Search Functionality', () => {
      it('should perform a search when the search input is filled', () => {
        
      });
  
    });
  });
  