/// <reference types="cypress" />
const customCommands = require('./commands.js')

module.exports = {
  commands: customCommands
}

declare namespace Cypress {
  interface Chainable {
    getByData(dataTestAttribute: string): Chainable
  }
}
