describe('Login Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it("Logs in successfully", () => {

    cy.visit("http://localhost:3000/login");

    const email = "sai@123.com";
    const password = "password1";

    cy.get("input[name='Email/Phone or Username']").type(email);
    cy.get("input[name='password']").type(password);

    cy.contains("Log in").click();

  });

  it("Handles password reset", () => {
    
    cy.visit("http://localhost:3000/login");

    // Simulate a password reset click
    cy.contains("Reset Here").click();

  });

  it("Handles forgot password", () => {
    
    cy.visit("http://localhost:3000/login");

    //simulate a forgot passowrd click
    cy.contains("Forgot Password").click();

  });
});
