import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { fetchNextArticlesList } from './fetchNextArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticlesList.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesList, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        view:ArticleView.BIG,
        order: 'asc',
        search: '',
        sort: ArticleSortField.CREATEDAT,
        _inited: true,
        type: ArticleType.ALL
      },
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 })
  })
  test('fetchAritcleList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesList, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        view:ArticleView.BIG,
        order: 'asc',
        search: '',
        sort: ArticleSortField.CREATEDAT,
        _inited:true,
        type: ArticleType.ALL
      },
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
