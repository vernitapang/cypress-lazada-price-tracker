describe('template spec', () => {
  it('passes', () => {
    cy.visit('/products/i4291543565-s24069129512.html')
    cy.get('.pdp-mod-product-badge-title').invoke('text').then((text) => {
      cy.log(text)
    })
  })
})