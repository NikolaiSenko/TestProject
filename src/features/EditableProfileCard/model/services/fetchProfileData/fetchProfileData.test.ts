import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { fetchProfileData } from './fetchProfileData'

const data =  {
    lastname: 'Сенько',
    firstname: 'Николай',
    age: 23,
    currency: Currency.USD,
    country: Country.Armenia,
    city: 'Minsk',
    username: 'admin',
  }

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))

        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
