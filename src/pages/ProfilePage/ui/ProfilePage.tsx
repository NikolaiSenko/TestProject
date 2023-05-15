import { classNames } from 'shared/lib/classNames/classNames'
import { Page } from 'widgets/Page/Page'
import {
  EditableProfileCard
} from 'features/EditableProfileCard'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

export interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({}: ProfilePageProps) => {
  const { id: profileId } = useParams<{ id: string }>()
  const { t } = useTranslation('profile')

  if (!profileId) {
    return <Text title={t('Error with profile loading occured')} />
  }
  return (
    <Page className={classNames('', {}, [])}>
        <EditableProfileCard profileId={profileId} />
    </Page>
  )
}

export default ProfilePage
