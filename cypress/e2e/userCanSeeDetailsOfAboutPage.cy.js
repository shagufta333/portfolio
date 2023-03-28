describe("User can see details of about page", () => {
  beforeEach(() => {
    // cy.intercept("GET", "**/about", {
    //   fixture: "about.json",
    // }).as("getAbout");

    cy.visit("/");
  
   
  });
//   beforeEach(() => {
//     cy.visit("/");
//     
//   });
context("",()=>{
  beforeEach(() => {
    cy.get("[data-cy=about-tab]").click({ force: true });
  });
  it("displays a popup with bio info", () => {
    //cy.get("[data-cy=about-tab]").click();
    cy.get("[data-cy=about-header]").trigger("mouseover");
    // cy.get(".ui.left.center.popup.transition.visible").should("exist");
//     cy.get(".ui.left.center.popup.transition.visible").within(() => {
//       cy.get(".header").should("exist");
//     });
   });
})
   
 });
