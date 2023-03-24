import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import cls from './ProfilePageHeader.module.scss'
import { getUserAuthData } from 'entities/User'

export interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)
  const profileData = useSelector(getProfileData)
  const authData = useSelector(getUserAuthData)
  const canEdit = profileData?.id === authData?.id

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCncelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSaveEdit = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])
  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('profile:profile page')} />
      {canEdit && (
        <div className={cls.btnsWrapper}>
          {readonly ? (
            <Button
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={onEdit}
            >
              {t('Edit')}
            </Button>
          ) : (
            <>
              <Button
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE_RED}
                onClick={onCncelEdit}
              >
                {t('Cancel')}
              </Button>
              <Button
                className={cls.saveBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onSaveEdit}
              >
                {t('Save')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
