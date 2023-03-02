import { profileReducer } from 'entities/Profile'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: ReducersList = {
  profile: profileReducer,
}

export interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ }: ProfilePageProps) => {
    const {t} = useTranslation(['profile'])
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
    <div className={classNames('', {}, [])}>
        {t('profile page')}
    </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
