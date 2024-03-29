import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { BugButton } from '@/features/BugButton'

const MainPage = () => {
  const { t } = useTranslation('main')
  return (
    <Page data-testid='MainPage'>
      <BugButton />
      {t('main page')}
    </Page>
  )
}

export default MainPage
