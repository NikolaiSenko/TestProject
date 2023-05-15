import {
  CombinedState,
  configureStore,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { uiReducer } from 'features/UI'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'

import { StateSchema } from './StateSchema'
import { rtkApi } from 'shared/api/rtkApi'

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    ui: uiReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    reducer: reducerManager.reduce as ReducersMapObject<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        }
      }
    }).concat(rtkApi.middleware)
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  store.reducerManager = reducerManager
  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']