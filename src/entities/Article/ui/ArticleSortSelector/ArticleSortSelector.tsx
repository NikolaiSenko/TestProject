import { ArticleSortField } from '../../model/constants/articleConstants'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { SortOrder } from '@/shared/types'
import { Select, SelectOption } from '@/shared/ui/Select'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { className, order, sort, onChangeOrder, onChangeSort } = props
  const { t } = useTranslation('articles')

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      { value: 'asc', content: t('ascending') },
      { value: 'desc', content: t('descending') },
    ],
    [t]
  )
  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATEDAT, content: t('date') },
      { value: ArticleSortField.TITLE, content: t('title') },
      { value: ArticleSortField.VIEWS, content: t('views') },
    ],
    [t]
  )

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        options={sortFieldOptions}
        label={t('Sort by')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('in')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  )
}
