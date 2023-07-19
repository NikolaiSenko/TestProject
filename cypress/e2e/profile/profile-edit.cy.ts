let profileId = ''

describe('User visit profile page', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      profileId = data.id
      cy.visit(`profile/${data.id}`)
    })
  })
  afterEach(()=>{
    cy.resetProfile(profileId)
  })
  it('Check whether profile mounted', () => {
    cy.getByTestId('ProfileCard.Firstname').should('have.value','test')
    cy.getByTestId('ProfileCard.Lastname').should('have.value','T21EST')
  })
  it('Edit profile', () => {
    cy.updateProfile()
    cy.getByTestId('ProfileCard.Firstname').should('have.value','new')
    cy.getByTestId('ProfileCard.Lastname').should('have.value','Lastname')
  })
  // it('Edit profile', () => {})
})
