import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input placeholder={t('input username')} type="text" autofocus/>
      <Input placeholder={t('input password')} type="text" />
      <Button className={cls.loginBtn}>{t('sign in')}</Button>
    </div>
  )
}
