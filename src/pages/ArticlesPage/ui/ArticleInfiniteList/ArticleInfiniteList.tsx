import { ArticleList } from '@/entities/Article'
import { getArticles } from '../../model/slices/articlesPageSlice'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  getArticlesPageError,
  getArticlesPageLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors'
import { useSearchParams } from 'react-router-dom'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text } from '@/shared/ui/Text'
import { useTranslation } from 'react-i18next'

interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation('articles')

  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageLoading)
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  if (error) {
    return <Text text={t('Error occurs while fetching articles')} />
  }

  return (
    <ArticleList
      className={className}
      view={view}
      articles={articles}
      isLoading={isLoading}
    />
  )
}
