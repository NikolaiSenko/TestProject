import { Page } from '@/widgets/Page'
import { EditableProfileCard } from '@/features/EditableProfileCard'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { VStack } from '@/shared/ui/Stack'
import { RateProfile } from '@/features/RateProfile'

const ProfilePage = () => {
  const { id: profileId } = useParams<{ id: string }>()
  const userAuthData = useSelector(getUserAuthData)
  const userId = userAuthData?.id

  return (
    <Page data-testid='ProfilePage'>
      <VStack gap="8">
        <EditableProfileCard profileId={profileId} />
        {userId !== profileId ? <RateProfile profileId={profileId || ''} /> : null}
      </VStack>
    </Page>
  )
}

export default ProfilePage
