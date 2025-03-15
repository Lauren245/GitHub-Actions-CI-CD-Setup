//I only added this because the starter code came with e2e testing configured
//not having a spec for e2e testing causes CI to fail.

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})