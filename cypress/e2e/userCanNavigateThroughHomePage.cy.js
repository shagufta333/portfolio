describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("Header Section", () => {
    it("displays About Me Tab", () => {
      cy.get("[data-cy=about-tab]").should("contain", "About Me");
    });
  });
});
