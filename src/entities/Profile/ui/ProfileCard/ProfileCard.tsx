import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

export interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const {t} = useTranslation('profile')
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileLoading)

  return <div className={classNames(cls.ProfileCard, {}, [className])}>
    <div className={cls.header}>
      <Text 
      title={t('profile page')}
      />
      <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t('Edit')}</Button>
    </div>
    <div className={cls.data}>
        <Input
          value={data?.firstname}
          placeholder={t('Firstname')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Lastname')}
          className={cls.input}
        />

    </div>
  </div>
}
