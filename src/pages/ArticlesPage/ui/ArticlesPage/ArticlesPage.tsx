import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { memo, useCallback } from 'react'
import { ArticleList } from 'entities/Article'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  articlesPageReducer,
  getArticles,
} from '../../model/slices/articlesPageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import {
  getArticlesPageLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlesList } from '../../model/services/fetchNextArticlesList/fetchNextArticlesList'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageLoading)
  const view = useSelector(getArticlesPageView)
  const [searchParams] = useSearchParams()


  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesList())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticleList
          className={cls.list}
          view={view}
          articles={articles}
          isLoading={isLoading}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
