const defaultProfile = {
  id: '4',
  lastname: 'T21EST',
  firstname: 'test',
  age: 16,
  currency: 'USD',
  country: 'Belarus',
  city: 'Minsk',
  username: 'testuser',
  avatar:
    'https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg',
}

export const updateProfile = () => {
  cy.getByTestId('EditableProfileCardHeader.EditBtn').click()
  cy.getByTestId('ProfileCard.Firstname').clear().type('new')
  cy.getByTestId('ProfileCard.Lastname').clear().type('Lastname')
  cy.getByTestId('EditableProfileCardHeader.SaveBtn').click()
}

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asdasd' },
    body: defaultProfile,
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
export {}
