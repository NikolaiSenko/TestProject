import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailPage.module.scss'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleDetailsCommentsLoading } from '../../model/selectors/comments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'widgets/Page/Page'
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import {getArticleRecommendationsIsLoading} from '../../model/selectors/recommendations'
import { articleDetailsPageReducer } from '../../model/slices'

interface ArticleDetailPageProps {
  className?: string
}
const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
  const { className } = props
  const { t } = useTranslation('articles')
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const commentIsLoading = useSelector(getArticleDetailsCommentsLoading)
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  )
  const navigate = useNavigate()

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecommendations())
  })

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailPage, {}, [className])}>
        {t('Article not found')}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailPage, {}, [className])}>
        <Button onClick={onBackToList}>{t('Go back to list')}</Button>
        <ArticleDetails id={id} />
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t('You may like')}
        />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={cls.recommendations}
          target={'_blank'}
        />
        <Text className={cls.commentsTitle} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailPage)
