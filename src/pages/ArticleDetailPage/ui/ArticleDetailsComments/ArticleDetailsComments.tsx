import { CommentList } from 'entities/Comment'
import { AddCommentForm } from 'features/AddCommentForm'
import { getArticleDetailsCommentsLoading } from '../../model/selectors/comments'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { VStack } from 'shared/ui/Stack'
import { Text } from 'shared/ui/Text/Text'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { useCallback } from 'react'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

interface ArticleDetailsCommentsProps {
  className?: string
  articleId: string
}

export const ArticleDetailsComments = (props: ArticleDetailsCommentsProps) => {
  const { className, articleId } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleComments.selectAll)
  const commentIsLoading = useSelector(getArticleDetailsCommentsLoading)

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId))
  })

  return (
    <VStack max gap='8' className={classNames('', {}, [className])}>
      <Text title={t('Comments')} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={commentIsLoading} comments={comments} />
    </VStack>
  )
}
