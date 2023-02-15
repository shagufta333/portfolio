/// <reference types="cypress" />
//import '@testing-library/cypress/add-commands'
export{}
Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`)
})

