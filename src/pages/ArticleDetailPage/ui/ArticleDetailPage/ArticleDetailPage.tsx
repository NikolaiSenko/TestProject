import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailPage.module.scss'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
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
import { getArticleDetailsCommentsLoading } from '../../model/selectors/comments/comments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'

interface ArticleDetailPageProps {
  className?: string
}
const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
  const { className } = props
  const { t } = useTranslation('articles')
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const commentIsLoading = useSelector(getArticleDetailsCommentsLoading)

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)))

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailPage, {}, [className])}>
        {t('Article not found')}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetailPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentsTitle} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailPage)
