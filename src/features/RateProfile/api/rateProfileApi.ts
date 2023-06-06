import { Rating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface GetProfileRatingArg {
  userId: string
  profileId: string
}

interface RateProfileArg {
  userId: string
  profileId: string
  feedback?: string
  rate: number
}

const rateProfileApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRating: build.query<Rating[], GetProfileRatingArg>({
      query: ({ profileId, userId }) => ({
        url: '/profile-ratings',
        params: {
          profileId,
          userId,
        },
      }),
    }),
    rateProfile: build.mutation<void, RateProfileArg>({
      query: (arg) => ({
        url: '/profile-ratings',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
  overrideExisting: false,
})

export const useGetProfileRating = rateProfileApi.useGetProfileRatingQuery
export const useRateProfile = rateProfileApi.useRateProfileMutation
