import { Rating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface GetArticleRatingArg {
  userId: string
  articleId: string
}

interface RateArticleArg {
  userId: string
  articleId: string
  feedback?: string
  rate: number
}

const rateArticleApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRatingArg>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          articleId,
          userId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArg>({
      query: (arg) => ({
        url: '/article-ratings',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
  overrideExisting: false,
})

export const useGetArticleRating = rateArticleApi.useGetArticleRatingQuery
export const useRateArticle = rateArticleApi.useRateArticleMutation
