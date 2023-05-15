import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { updateProfileData } from './updateProfileData'
import { ValidateProfileError } from '../../types/EditableProfileCardSchema'

const data = {
  lastname: 'Сенько',
  firstname: 'Николай',
  age: 23,
  currency: Currency.USD,
  country: Country.Armenia,
  city: 'Minsk',
  username: 'admin',
  id:'1'
}

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })

  test('validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '', firstname: '' },
      },
    })
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ])
  })
})
