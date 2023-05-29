import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { ArticleList } from 'entities/Article'
import { VStack } from 'shared/ui/Stack'
import { useArticleRecommendationsList } from '../../api/articleRecomendationsListApi'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props
    const { t } = useTranslation('articles')
    const { data: articles, isLoading } = useArticleRecommendationsList(3)
    if (isLoading || !articles) return null

    return (
      <VStack gap="8" className={classNames('', {}, [className])}>
        <Text size={TextSize.L} title={t('You may like')} />
        <ArticleList articles={articles} target={'_blank'} />
      </VStack>
    )
  }
)
