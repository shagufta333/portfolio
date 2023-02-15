describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("Header Section",() => {
   it('displays About Me Tab', () => {
    //cy.getByData("about-tab").contains("About Me")
    cy.get("[data-cy=about-tab]").should("contain", "About Me");
   });

  })
});
