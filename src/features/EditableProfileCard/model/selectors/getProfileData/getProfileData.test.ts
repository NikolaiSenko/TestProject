
import { StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getProfileData } from './getProfileData'


describe('getCounter', () => {
  test('should return value', () => {
    const data =  {
        lastname: 'Сенько',
        firstname: 'Николай',
        age: 23,
        currency: Currency.USD,
        country: Country.Armenia,
        city: 'Minsk',
        username: 'admin',
      }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: data
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('should return with undefined state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
