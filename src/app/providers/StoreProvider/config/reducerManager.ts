import { ReducersMapObject, combineReducers, AnyAction, Reducer } from 'redux'
import {
  MountedReducers,
  ReducerManager,
  StateSchema,
  StateSchemaKey,
} from './StateSchema'

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: StateSchemaKey[] = []

  const mountedReducers: MountedReducers = {}

  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (const key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }
      return combinedReducer(state, action)
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }
      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
      mountedReducers[key] = true
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }
      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
      mountedReducers[key] = false
    },
  }
}
