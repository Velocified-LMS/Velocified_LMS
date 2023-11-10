describe('Homepage Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should click the Explore button', () => {

      // Click the Explore button
      cy.contains("Explore").click();
    });
  
    it('should click the Home button', () => {

        // Click the Home button
        cy.contains("Home").click();
      });

    it('should click the About button', () => {
        
        // Click the About button
        cy.contains("About").click();
    });
    it('should click the Training button', () => {
        
        // Click the Training button
        cy.contains("Training").click();
    });
    it('should click the News button', () => {
        
        // Click the News button
        cy.contains("News").click();
    });
    it('should click the FR button', () => {
        
        // Click the FR button
        cy.contains("FR").click();
    });
    it('should click the Log In button', () => {
        
        // Click the Log in button
        cy.contains("Log in").click();
    });
  });
  