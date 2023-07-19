import { getUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getRouteArticleCreate } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Text, TextTheme } from '@/shared/ui/Text'
import cls from './Navbar.module.scss'
import { HStack } from '@/shared/ui/Stack'
import { NotificationButton } from '@/features/notificationButton'
import { AvatarDropdown } from '@/features/AvatarDropdown'

export interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const userAuthData = useSelector(getUserAuthData)

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  if (userAuthData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('Nikolai User')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={getRouteArticleCreate()}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('Create Article')}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    )
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.OUTLINE_INVERTED}
        className={cls.links}
        onClick={onOpenModal}
      >
        {t('sign in')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  )
})
