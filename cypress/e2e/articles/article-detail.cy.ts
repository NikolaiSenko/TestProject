let articleId = ''
describe('User opens article detail page', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then((article) => {
      articleId = article.id
      cy.visit(`articles/${article.id}`)
    })
  })
  afterEach(() => {
    cy.deleteArticle(articleId)
  })
  it('And sees article details', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
  })
  it('And sees recomendations', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist')
  })
  it('And leaves comment', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('AddCommentForm').scrollIntoView()
    cy.addComment('text')
    cy.getByTestId('CommentCard.Content').should('have.length', 1)
  })
  it('And Rate article', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(4, 'feedback')
    cy.get('[data-selected=true]').should('have.length', 4)
  })
})
