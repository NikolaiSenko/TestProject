import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Text } from '@/shared/ui/Text'
import { Icon } from '@/shared/ui/Icon'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { Card } from '@/shared/ui/Card'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { getRouteArticleDetails } from '@/shared/const/router'
import { AppLink } from '@/shared/ui/AppLink'
import cls from './ArticleListItem.module.scss'
import { Article, ArticleTextBlock } from '../../model/types/article'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import {
  ArticleBlockType,
  ArticleView,
} from '../../model/constants/articleConstants'
import { HStack, VStack } from '@/shared/ui/Stack'
import { AppImage } from '@/shared/ui/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props
  const { t } = useTranslation()

  const types = <Text text={article.type.join(', ')} className={cls.types} />
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  )
  const errorFallback = <Text title={t('Error occured with image')} />
  const loadingFallbackBig = <Skeleton width={'100%'} height={250} />
  const loadingFallbackSmall = <Skeleton width={200} height={200} />

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <HStack gap="8" align="center">
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </HStack>
          <Text title={article.title} className={cls.title} />
          {types}
          <AppImage
            src={article.img}
            className={cls.img}
            alt={article.title}
            errorFallback={errorFallback}
            fallback={loadingFallbackBig}
          />
          <VStack gap="8">
            {textBlock && (
              <ArticleTextBlockComponent
                block={textBlock}
                className={cls.textBlock}
              />
            )}
            <HStack align="center" max>
              <AppLink target={target} to={getRouteArticleDetails(article.id)}>
                <Button theme={ButtonTheme.OUTLINE}>
                  {t('Читать далее...')}
                </Button>
              </AppLink>
              {views}
            </HStack>
          </VStack>
        </Card>
      </div>
    )
  }

  return (
    <AppLink
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <VStack gap="16">
          <VStack className={cls.imageWrapper}>
            <AppImage
              alt={article.title}
              src={article.img}
              className={cls.img}
              errorFallback={errorFallback}
              fallback={loadingFallbackSmall}
            />
            <Text text={article.createdAt} className={cls.date} />
          </VStack>
          <HStack align="center">
            {types}
            {views}
          </HStack>

          <Text text={article.title} className={cls.title} />
        </VStack>
      </Card>
    </AppLink>
  )
})
