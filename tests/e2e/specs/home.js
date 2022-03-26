// https://docs.cypress.io/api/table-of-contents
describe('Home page test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/home')
    cy.contains('h2', 'TV Series').should('be.visible');
    cy.contains('p', 'Breaking Bad').should('be.visible');
  })
})
