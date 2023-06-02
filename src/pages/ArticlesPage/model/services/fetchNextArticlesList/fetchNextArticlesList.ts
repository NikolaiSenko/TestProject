import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import {
  getArticlesPageHasMore,
  getArticlesPageLoading,
  getArticlesPageNum,
} from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'


export const fetchNextArticlesList = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlesList', async (_, thunkApi) => {
  const {  getState, dispatch } = thunkApi
  const hasMore = getArticlesPageHasMore(getState())
  const page = getArticlesPageNum(getState())
  const isLoading = getArticlesPageLoading(getState())
  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1))
    dispatch(fetchArticlesList({}))
  }
})
