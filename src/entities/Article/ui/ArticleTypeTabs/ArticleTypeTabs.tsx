import { ArticleType } from '../../model/constants/articleConstants'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs'

interface ArticleTypeTabsProps {
  className?: string
  onChangeType: (type: ArticleType) => void
  type: ArticleType
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const { className, type, onChangeType } = props
  const { t } = useTranslation()

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t('All'),
      },
      {
        value: ArticleType.IT,
        content: t('IT'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Science'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('Economics'),
      },
    ],
    [t]
  )

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType)
    },
    [onChangeType]
  )

  return (
    <Tabs
      className={className}
      tabs={typeTabs}
      onTabClick={onTabClick}
      value={type}
    />
  )
}
