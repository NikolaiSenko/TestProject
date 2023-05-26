import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page/Page'

interface ForbiddenPageProps {
  className?: string
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page className={classNames('', {}, [className])}>
      <Text title={t('Forbidden Page')} /> 
    </Page>
  )
}

export default ForbiddenPage
