import { EntityState } from '@reduxjs/toolkit'
import { CommentInterface } from 'entities/Comment'

export interface ArticleDetailsCommentsSchema
  extends EntityState<CommentInterface> {
  isLoading?: boolean
  error?: string
}
