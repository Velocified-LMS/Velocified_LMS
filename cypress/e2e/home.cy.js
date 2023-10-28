
describe("Login Page", () => {

  it("Loads the Login page", () => {

    cy.visit("http://localhost:3000/login");

    // You can add assertions to check if the page loaded correctly
    cy.contains("Log in");
    cy.get("input[name='username']").should("exist");
    cy.get("input[name='password']").should("exist");
  });

  it("Checks if the 'Log in' button exists", () => {

    cy.visit("http://localhost:3000/login");

    // Use the `cy.get` command to locate the "Log in" button by its text
    cy.get("button").contains("Log in").should("exist");
  });

  it("Logs in successfully", () => {

    cy.visit("http://localhost:3000/login");

    // You should replace these credentials with valid test data
    const email = "sai1@123.com";
    const password = "password1";

    cy.get("input[name='username']").type(email);
    cy.get("input[name='password']").type(password);

    cy.contains("Log in").click();

  });

  it("Handles password reset", () => {
    
    cy.visit("http://localhost:3000/login");

    // Simulate a password reset click
    cy.contains("Reset Here").click();

  });
});
