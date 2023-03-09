import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { ProfileSchema, ValidateProfileError } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'
const data = {
  lastname: 'Сенько',
  firstname: 'Николай',
  age: 23,
  currency: Currency.USD,
  country: Country.Armenia,
  city: 'Minsk',
  username: 'admin',
}

describe('counterSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    }
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true })
  })
  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    }
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({ readonly: true, form: state.data, validateErrors: undefined })
  })
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        username: '123',
      },
    }
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: '1233211' })
      )
    ).toEqual({ form: { username: '1233211' } })
  })
  test('test pending update data', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    }
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({ isLoading: true, validateErrors: undefined })
  })
  test('test fulfilled update data', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    }
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '')
      )
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data: data,
    })
  })
})
