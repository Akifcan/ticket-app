describe('template spec', () => {
  it('passes', () => {
    const nowDate = new Date()

    const x = new Date().setDate(nowDate.getDate() + 1)

    cy.visit('http://localhost:3000/create')
    cy.get('#customer-name').focus().type('test customer')
    cy.get('#start-date').focus().type(new Date().toISOString().split('T')[0])
    cy.get('#end-date').focus().type(new Date(x).toISOString().split('T')[0])
    cy.get('#start-time').focus().type('10:00')
    cy.get('#location').focus().type('remote')
    cy.get('#button').click()
    cy.wait(2000)
    cy.get('#result').contains('This record added')
    cy.wait(1000)
    cy.request('POST', 'http://localhost:3000/api/hello')
  })
})
