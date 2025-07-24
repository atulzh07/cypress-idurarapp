import loginPage from "../support/pageObjects/loginPage";
import companies from "../support/pageObjects/companiesPage";

describe("Idurarapp - Companies", () => {
  it("Companies Page - CRUD Operations", () => {
    cy.visit(loginPage.url);
    cy.get(loginPage.selectors.pageText).contains("Manage Your Company With");
    cy.fixture("/credentials").then((credentials) => {
      const { email } = credentials;
      const password = Cypress.env("PASSWORD");
      cy.get(loginPage.selectors.emailInput).type(email);
      cy.get(loginPage.selectors.passwordInput).type(password);
    });
    cy.get(loginPage.selectors.submitButton)
      .should("have.text", "Log In")
      .click();
    cy.url().should("include", loginPage.url);
    const companyName = "Test Company";
    const companyEmail = "test@company.com";
    cy.contains("Companies").click();
    cy.url().should("include", companies.url);
    cy.get(companies.selectors.addCompanyButton)
      .eq(1)
      .should("have.text", "Add New Company")
      .click();
    cy.get(companies.selectors.nameField).type(companyName);
    cy.get(companies.selectors.emailField).type(companyEmail);
    cy.get(companies.selectors.submitButton)
      .should("have.text", "Submit")
      .click();
    cy.get(companies.selectors.companyName).eq(0);
    cy.get(companies.selectors.drawerClose).click();
    cy.get(companies.selectors.dropdownMenu).eq(-1).click();
    cy.get(companies.selectors.editButton)
      .eq(1)
      .should("have.text", "Edit")
      .click();
    cy.get(companies.selectors.numberSelector).type("+1111111111");
    cy.get(companies.selectors.submitButton)
      .should("have.text", "Save")
      .click();
    cy.get(companies.selectors.deleteButton).eq(0).click();
    cy.get(companies.selectors.deleteModalHeader).should(
      "have.text",
      "Delete Confirmation"
    );
    cy.get(companies.selectors.deleteModalBody).should(
      "contain.text",
      "Are You Sure You Want To Delete"
    );
    cy.contains("OK").click();
  });
});
