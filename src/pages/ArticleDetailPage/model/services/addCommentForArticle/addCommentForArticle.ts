import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleDetailsData } from '@/entities/Article'
import { CommentInterface } from '@/entities/Comment'

export const addCommentForArticle = createAsyncThunk<
  CommentInterface,
  string,
  ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi

  const userData = getUserAuthData(getState())
  const article = getArticleDetailsData(getState())

  if (!userData || !text || !article) {
    return rejectWithValue('no data')
  }

  try {
    const response = await extra.api.post<CommentInterface>('/comments', {
      articleId: article.id,
      userId: userData.id,
      text,
    })

    if (!response.data) {
      throw new Error()
    }

    dispatch(fetchCommentsByArticleId(article.id))

    return response.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
