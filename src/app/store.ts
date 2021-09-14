import { combineReducers } from '@reduxjs/toolkit'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice'
export const history = createBrowserHistory()

const rootReducer = combineReducers({
  router: connectRouter(history) as any,
  counter: counterReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
})

export type AppDispatch = typeof store.dispatch
