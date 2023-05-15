import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { getUserAuthData } from 'entities/User'
import { HStack } from 'shared/ui/Stack'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { profileActions } from '../../model/slice/profileSlice'

export interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader = ({
  className,
}: EditableProfileCardHeaderProps) => {
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
    <HStack justify="between" max className={classNames('', {}, [className])}>
      <Text title={t('profile:profile page')} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
              {t('Edit')}
            </Button>
          ) : (
            <HStack gap="8">
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCncelEdit}>
                {t('Cancel')}
              </Button>
              <Button theme={ButtonTheme.OUTLINE} onClick={onSaveEdit}>
                {t('Save')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  )
}
