describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("About-tab Section", () => {
    beforeEach(() => {
      cy.get("[data-cy=about-tab]").click();
    });
    it("displays About Me Tab", () => {
      cy.get("[data-cy=about-tab]").should("contain", "About Me");
    });
    it("displays component name in url", () => {
      cy.url().should("contain", "about");
    });
  });
  context("MyPortfolio-tab Section", () => {
    beforeEach(() => {
      cy.get("[data-cy=portfolio-tab]").click();
    });
    it("displays My Portfolio Tab", () => {
      cy.get("[data-cy=portfolio-tab]").should("contain", "My Portfolio");
    });
    it("displays component name in url", () => {
      cy.url().should("contain", "/");
    });
  });
});
