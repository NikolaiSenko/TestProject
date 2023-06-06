import { Suspense, lazy } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { RateProfileProps } from './RateProfile'

const RateProfileazy = lazy(() => import('./RateProfile'))

export const RateProfileAsync = (props: RateProfileProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
      <RateProfileazy {...props} />
    </Suspense>
  )
}
