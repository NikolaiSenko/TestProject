import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useState } from 'react'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import NotificationIcon from '@/shared/assets/icons/notif.svg'
import { NotificationList } from '@/entities/Notification'
import { Popover } from '@/shared/ui/Popups'
import cls from './NotificationButton.module.scss'
import { Drawer } from '@/shared/ui/Drawer'
import { BrowserView, MobileView } from 'react-device-detect'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const onOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true)
  }, [])
  const onCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false)
  }, [])

  const triggerButton = (
    <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  )

  return (
    <div>
      <BrowserView>
        <Popover
          className={classNames(cls.NotificationButton, {}, [className])}
          direction="bottom left"
          trigger={triggerButton}
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {triggerButton}
          <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
      </MobileView>
    </div>
  )
})
