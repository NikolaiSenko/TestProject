
import { StateSchema } from '@/app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getCounter', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { error: 'error' },
    }
    expect(getLoginError(state as StateSchema)).toEqual('error')
  })
  test('should return with undefined state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})
