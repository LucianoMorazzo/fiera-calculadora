describe('empty spec', () => {
  it('web principal abre y realiza una sumatoria', () => {
    cy.visit('https://fiera-calculadora.vercel.app/')

    cy.contains('2').click()

    cy.contains('+').click()

    cy.contains('4').click()

    cy.contains('=').click()

    cy.get('.display > h2')
      .should('include.text', 6)
  })
})