import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { useSelector } from 'react-redux'
import { getCanEditArticle } from '../../model/selectors/article'
import { getArticleDetailsData } from '@/entities/Article'
import { HStack } from '@/shared/ui/Stack'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props
    const { t } = useTranslation()
    const navigate = useNavigate()
    const canEdit = useSelector(getCanEditArticle)
    const article = useSelector(getArticleDetailsData)

    const onBackToList = useCallback(() => {
      navigate(getRouteArticles())
    }, [navigate])

    const onEditArticle = useCallback(() => {
      if (article) {
        navigate(getRouteArticleEdit(article?.id))
      }
    }, [article, navigate])

    return (
      <HStack max justify="between" className={classNames('', {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t('Назад к списку')}
        </Button>
        {canEdit && (
          <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
            {t('Редактировать')}
          </Button>
        )}
      </HStack>
    )
  }
)
