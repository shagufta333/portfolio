describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("Header Section", () => {
    it("displays About Me Tab", () => {
      cy.get("[data-cy=about-tab]").should("contain", "About Me");
    });
    it("displays component name in url", () => {
      cy.url().should("contain", "about");
    });
    // rewrite the  test on line 10
  });
});
