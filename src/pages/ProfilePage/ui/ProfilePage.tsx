import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page/Page'
import {
  EditableProfileCard
} from '@/features/EditableProfileCard'
import { useParams } from 'react-router-dom'

export interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({}: ProfilePageProps) => {
  const { id: profileId } = useParams<{ id: string }>()

  return (
    <Page className={classNames('', {}, [])}>
        <EditableProfileCard profileId={profileId} />
    </Page>
  )
}

export default ProfilePage
