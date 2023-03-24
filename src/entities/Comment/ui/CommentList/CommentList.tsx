import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { CommentInterface } from 'entities/Comment/model/types/comment'
import { Text } from 'shared/ui/Text/Text'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
  className?: string
  comments?: CommentInterface[]
  isLoading?: boolean
}

export const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation()

  if(isLoading) {
    return (<div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard
          className={cls.comment}
          isLoading={isLoading}
        />
        <CommentCard
          className={cls.comment}
          isLoading={isLoading}
        />
        <CommentCard
          className={cls.comment}
          isLoading={isLoading}
        />
  </div>)
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments?.map((comment) => (
          <CommentCard
            className={cls.comment}
            comment={comment}
            key={comment.id}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t('No comments')} />
      )}
    </div>
  )
}
