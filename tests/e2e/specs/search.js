// https://docs.cypress.io/api/table-of-contents

describe('Search page test', () => {
  it('Fill in search input', () => {
    cy.visit('http://localhost:8080/search')
    cy.get('input').type('games', { release: false })
    cy.get('.link.card-footer-item').click() // click the button 🤞
    cy.contains('div', 'Spy Games')

  })
})
