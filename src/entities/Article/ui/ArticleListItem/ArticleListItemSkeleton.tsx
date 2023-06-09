import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { ArticleView } from '../../model/constants/articleConstants'
import { Card } from '@/shared/ui/Card'
import { Skeleton } from '@/shared/ui/Skeleton'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton = (
  props: ArticleListItemSkeletonProps
) => {
  const { className, view } = props

  if (view === ArticleView.BIG) {
    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border={'50%'} />
            <Skeleton width={200} height={16} className={cls.username} />
            <Skeleton width={200} height={16} className={cls.date} />
          </div>
          <Skeleton width={'100%'} height={24} className={cls.title} />
          <Skeleton width={'100%'} height={200} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton width={300} height={36} className={cls.title} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton className={cls.img} width={200} height={200} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} />
      </Card>
    </div>
  )
}
