import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { Avatar } from '@/shared/ui/Avatar'
import { Text } from '@/shared/ui/Text'
import { Skeleton } from '@/shared/ui/Skeleton'
import { AppLink } from '@/shared/ui/AppLink'
import { RoutePath } from '@/shared/const/router'
import { CommentInterface } from '../../model/types/comment'
import { HStack, VStack } from '@/shared/ui/Stack'

interface CommentCardProps {
  className?: string
  comment?: CommentInterface
  isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <VStack max gap='8'
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <HStack className={cls.header}>
          <Skeleton border={'50%'} width={30} height={30} />
          <Skeleton height={16} width={100} />
        </HStack>

        <Skeleton height={16} width={'100%'} className={cls.text} />
      </VStack>
    )
  }

  if (!comment) {
    return null
  }

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.CommentCard, {}, [className])}
    >
      <AppLink
        to={`${RoutePath.profile}${comment?.user.id}`}
        className={cls.header}
      >
        {comment?.user.avatar ? (
          <Avatar size={30} src={comment?.user.avatar} />
        ) : null}
        <Text title={comment?.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment?.text} />
    </VStack>
  )
}
