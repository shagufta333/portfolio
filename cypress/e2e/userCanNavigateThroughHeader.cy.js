describe("user can navigate through links in header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("About-tab ", () => {
    beforeEach(() => {
      cy.get("[data-cy=about-tab]").click();
    });
    it("displays About Me tab", () => {
      cy.get("[data-cy=about-tab]").should("contain", "About Me");
    });
    it("displays component name in url", () => {
      cy.url().should("contain", "about");
    });
  });
  context("MyPortfolio-tab ", () => {
    beforeEach(() => {
      cy.get("[data-cy=portfolio-tab]").click();
    });
    it("displays My Portfolio tab", () => {
      cy.get("[data-cy=portfolio-tab]").should("contain", "My Portfolio");
    });
    it("displays component name in url", () => {
      cy.url().should("contain", "/");
    });
  });
  context("MyProjects-tab ", () => {
    beforeEach(() => {
      cy.get("[data-cy=projects-tab]").click();
    });
    it("displays My Projects tab", () => {
      cy.get("[data-cy=projects-tab]").should("contain", "My Projects");
    });
    it("displays component name in url", () => {
      cy.url().should("contain", "/myProjects");
    });
  });
  context("Contact-tab ", () => {
    beforeEach(() => {
      cy.get("[data-cy=contact-tab]").click();
    });
    it("displays Contact tab", () => {
      cy.get("[data-cy=contact-tab]").should("contain", "Contact");
    });
    it("displays component name in url", () => {
      cy.url().should("contain", "/contact");
    });
  });
});
