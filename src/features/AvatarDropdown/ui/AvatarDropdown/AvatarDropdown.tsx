import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User'
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router'

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const authData = useSelector(getUserAuthData)

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager

  if (!authData) {
    return null
  }

  return (
    <Dropdown
      direction="bottom left"
      className={classNames('', {}, [className])}
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: t('Admin'),
                href: getRouteAdmin(),
              },
            ]
          : []),
        {
          content: t('profile page'),
          href: getRouteProfile(authData.id),
        },
        {
          content: t('Logout'),
          onClick: onLogout,
        },
      ]}
      trigger={<Avatar size={35} src={authData.avatar} fallbackInverted />}
    />
  )
})
