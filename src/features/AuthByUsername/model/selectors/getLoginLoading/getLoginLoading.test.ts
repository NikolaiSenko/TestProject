import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginLoading } from './getLoginLoading'

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { isLoading: true },
    }
    expect(getLoginLoading(state as StateSchema)).toEqual(true)
  })
  test('should return false with undefined state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginLoading(state as StateSchema)).toEqual(false)
  })
})
