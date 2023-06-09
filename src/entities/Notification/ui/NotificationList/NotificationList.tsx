import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationList.module.scss'
import { useNotifications } from '../../api/notificationApi'
import { VStack } from '@/shared/ui/Stack'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { Skeleton } from '@/shared/ui/Skeleton'

interface NotificationListProps {
  className?: string
}

export const NotificationList = (props: NotificationListProps) => {
  const { className } = props
  const { data: notifications, isLoading } = useNotifications(null,{
    pollingInterval:10000
  })

  if (isLoading) {
    return (
      <VStack
        gap='16'
        max
        className={classNames(cls.NotificationList, {}, [className])}
      >
        <Skeleton width='100%' border='8px' height='80px' />
        <Skeleton width='100%' border='8px' height='80px' />
        <Skeleton width='100%' border='8px' height='80px' />
      </VStack>
    )
  }

  return (
    <VStack
      gap='16'
      max
      className={classNames(cls.NotificationList, {}, [className])}
    >
      {notifications?.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </VStack>
  )
}
