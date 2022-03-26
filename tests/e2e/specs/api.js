// https://docs.cypress.io/api/table-of-contents
describe('Get all tv shows', () => {
  it('Tets if api get request works', () => {
    cy.request('GET', 'http://api.tvmaze.com/shows?q=').then(
      (response) => {
        // response.body is automatically serialized into JSON
        expect(response.body) // true
      }
    )
  })
  it('Tets api search request', () => {
    cy.request('GET', 'http://api.tvmaze.com/search/shows?q=games').then(
      (response) => {
        expect(response.body) // true
      }
    )
  })
})
