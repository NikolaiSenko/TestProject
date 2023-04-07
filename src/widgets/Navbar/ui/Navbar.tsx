import { getUserAuthData, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import cls from './Navbar.module.scss'

export interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const userAuthData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])
  const onOpenModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])
  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (userAuthData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('Nikolai User')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('Создать статью')}
        </AppLink>
        <Button
          theme={ButtonTheme.OUTLINE_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t('sign out')}
        </Button>
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
