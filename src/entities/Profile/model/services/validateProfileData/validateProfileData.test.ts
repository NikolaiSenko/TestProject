import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ValidateProfileError } from '../../types/profile'
import { validateProfileData } from './validateProfileData'

const data = {
  lastname: 'Сенько',
  firstname: 'Николай',
  age: 23,
  currency: Currency.USD,
  country: Country.Armenia,
  city: 'Minsk',
  username: 'admin',
}

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data)
    expect(result).toEqual([])
  })

  test('without firstname and lastname', async () => {
    const result = validateProfileData({ ...data, lastname: '', firstname: '' })

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: 0 })

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })
  test('without country', async () => {
    const result = validateProfileData({ ...data, country: undefined })

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
  })
  test('incorrect all', async () => {
    const result = validateProfileData({})

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ])
  })
})
