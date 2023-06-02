
import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileError } from './getProfileError'


describe('getCounter', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: '123'
      },
    }
    expect(getProfileError(state as StateSchema)).toEqual('123')
  })
  test('should return with undefined state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
