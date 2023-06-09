import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useGetProfileRating, useRateProfile } from '../../api/rateProfileApi'
import { Skeleton } from '@/shared/ui/Skeleton'
import { useCallback } from 'react'

export interface RateProfileProps {
  className?: string
  profileId: string
}

const RateProfile = (props: RateProfileProps) => {
  const { className, profileId } = props
  const userAuthData = useSelector(getUserAuthData)
  const { t } = useTranslation(['profile'])

  const { isLoading, data: profileRatingData } = useGetProfileRating({
    profileId,
    userId: userAuthData?.id ?? '',
  })

  const [rateProfile] = useRateProfile()

  const handleRateProfile = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateProfile({
          profileId,
          userId: userAuthData?.id ?? '',
          rate: starsCount,
          feedback,
        })
      } catch (e) {
        console.log(e)
      }
    },
    [profileId, rateProfile, userAuthData?.id]
  )

  const onAcceptRating = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateProfile(starsCount, feedback)
    },
    [handleRateProfile]
  )

  const onCancelRating = useCallback(
    (starsCount: number) => {
      handleRateProfile(starsCount)
    },
    [handleRateProfile]
  )

  if (isLoading) {
    return <Skeleton width={'100%'} height={140} />
  }

  const profileRating = profileRatingData?.[0]

  return (
    <RatingCard
      onAcceptRating={onAcceptRating}
      onCancelRating={onCancelRating}
      className={className}
      title={t('Rate this profile')}
      feedbackTitle={t('Please send feedback about this profile')}
      hasFeedback
      rate={profileRating?.rate}
    />
  )
}

export default RateProfile
