import { RatingCard } from '@/entities/Rating'
import { useTranslation } from 'react-i18next'
import { useGetArticleRating, useRateArticle } from '../../api/rateArticleApi'
import { getUserAuthData } from '@/entities/User'
import { useSelector } from 'react-redux'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { useCallback } from 'react'

export interface RateArticleProps {
  className?: string
  articleId: string
}

const RateArticle = (props: RateArticleProps) => {
  const { className, articleId } = props
  const { t } = useTranslation(['articles'])
  const userAuthData = useSelector(getUserAuthData)

  const { isLoading, data: articleRatingData } = useGetArticleRating({
    articleId,
    userId: userAuthData?.id ?? '',
  })

  const [rateArticleMutation] = useRateArticle()

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          articleId: articleId,
          userId: userAuthData?.id ?? '',
          rate: starsCount,
          feedback,
        })
      } catch (e) {
        console.log(e)
      }
    },
    [articleId, rateArticleMutation, userAuthData?.id]
  )

  const onAcceptRating = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback)
    },
    [handleRateArticle]
  )

  const onCancelRating = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount)
    },
    [handleRateArticle]
  )

  if (isLoading) {
    return <Skeleton height={140} width={'100%'} />
  }

  const articleRating = articleRatingData?.[0]

  return (
    <RatingCard
      onAcceptRating={onAcceptRating}
      onCancelRating={onCancelRating}
      rate={articleRating?.rate}
      className={className}
      title={t('Rate this article')}
      feedbackTitle={t('Please leave feedback about this article')}
      hasFeedback
    />
  )
}

export default RateArticle
