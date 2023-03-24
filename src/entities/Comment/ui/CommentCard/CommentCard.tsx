import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { CommentInterface } from 'entities/Comment/model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface CommentCardProps {
  className?: string
  comment?: CommentInterface
  isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <div
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton border={'50%'} width={30} height={30} />
          <Skeleton height={16} width={100} />
        </div>

        <Skeleton height={16} width={'100%'} className={cls.text} />
      </div>
    )
  }

  if (!comment) {
    return null
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
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
    </div>
  )
}
