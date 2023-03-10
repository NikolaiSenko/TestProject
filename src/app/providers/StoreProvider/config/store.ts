import {
  CombinedState,
  configureStore,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { To, NavigateOptions } from 'react-router-dom'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'

import { StateSchema } from './StateSchema'

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions)=> void
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
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
          navigate,
        }
      }
    })
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  store.reducerManager = reducerManager
  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']