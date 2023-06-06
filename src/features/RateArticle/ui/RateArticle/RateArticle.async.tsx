import { Suspense, lazy } from 'react'
import { RateArticleProps } from './RateArticle'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

const RateArticleLazy = lazy(() => import('./RateArticle'))

export const RateArticleAsync = (props: RateArticleProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
      <RateArticleLazy {...props} />
    </Suspense>
  )
}
