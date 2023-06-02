import { screen } from '@testing-library/react'
import { EditableProfileCard } from './EditableProfileCard'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { Profile } from '@/entities/Profile'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { profileReducer } from '../../model/slice/profileSlice'
import userEvent from '@testing-library/user-event'
import { $api } from '@/shared/api/api'

const profile: Profile = {
  id: '1',
  age: 23,
  firstname: 'admin',
  lastname: 'admin',
  city: 'Mazyr',
  country: Country.Belarus,
  currency: Currency.EUR,
  username: '123321',
}

const mockedStor = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
}

describe('features/EditableProfileCard', () => {
  test('Test tap on edit button', async () => {
    componentRender(<EditableProfileCard profileId="1" />, mockedStor)
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditBtn')
    )
    expect(
      screen.getByTestId('EditableProfileCardHeader.CancelBtn')
    ).toBeInTheDocument()
  })
  test('Test canceling formating', async () => {
    componentRender(<EditableProfileCard profileId="1" />, mockedStor)
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditBtn')
    )
    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'))
    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('')

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user')
    await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'user')

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user') 

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'))

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('admin')
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('admin') 
  })
  test('Test that error appear', async () => {
    componentRender(<EditableProfileCard profileId="1" />, mockedStor)
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditBtn')
    )
    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'))
    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('')

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'))

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
  })

  test('Test that request has been sent', async () => {
    const mockedPutReq = jest.spyOn($api,'put')
    componentRender(<EditableProfileCard profileId="1" />, mockedStor)
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditBtn')
    )
    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'))

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('')

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user')
    await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'user')
  
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'))
    
    expect(mockedPutReq).toBeCalled()
  })
})
