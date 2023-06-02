
import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'


describe('getCounter', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      },
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(true)
  })
  test('should return with undefined state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
  })
})
