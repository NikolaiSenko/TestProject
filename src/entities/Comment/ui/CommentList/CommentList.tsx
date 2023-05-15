import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { CommentInterface } from '../../model/types/comment'
import { Text } from 'shared/ui/Text/Text'
import { CommentCard } from '../CommentCard/CommentCard'
import { VStack } from 'shared/ui/Stack'

interface CommentListProps {
  className?: string
  comments?: CommentInterface[]
  isLoading?: boolean
}

export const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <CommentCard isLoading={isLoading} />
        <CommentCard isLoading={isLoading} />
        <CommentCard isLoading={isLoading} />
      </VStack>
    )
  }

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      {comments?.length ? (
        comments?.map((comment) => (
          <CommentCard
            comment={comment}
            key={comment.id}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t('No comments')} />
      )}
    </VStack>
  )
}
