import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

export interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={'/'}
          className={cls.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('main page')}
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
        {t('about page')}
        </AppLink>
      </div>
    </div>
  )
}