
import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileLoading } from './getProfileLoading'


describe('getCounter', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      },
    }
    expect(getProfileLoading(state as StateSchema)).toEqual(true)
  })
  test('should return with undefined state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileLoading(state as StateSchema)).toEqual(undefined)
  })
})
