describe('User opens Articles Page', () => {
  beforeEach(()=>{
    cy.login().then(() =>{
      cy.visit('articles')
    })
  })
  it('check if article list mounted', () => {
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })
})