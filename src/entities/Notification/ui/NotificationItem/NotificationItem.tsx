import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationItem.module.scss'
import { Notification } from '../../model/types/notification'
import { Card, CardTheme } from '@/shared/ui/Card'
import { Text } from '@/shared/ui/Text'
import { AppLink } from '@/shared/ui/AppLink'

interface NotificationItemProps {
  className?: string
  notification: Notification
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { className, notification } = props

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.NotificationItem, {}, [className])}
    >
      <Text title={notification.title} text={notification.description} />
    </Card>
  )

  if (notification.href) {
    return (
      <AppLink className={cls.link} to={notification.href} target="__blank">
        {content}
      </AppLink>
    )
  }

  return content
}
