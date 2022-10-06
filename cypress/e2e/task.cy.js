describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('input[id=task]').type('test: my first task')
  })
})