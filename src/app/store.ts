import { combineReducers } from '@reduxjs/toolkit'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice'
import firstUserReducer from '../feature/Human-verse-human/firsthuman'
import secondUserReducer from '../feature/Human-verse-human/secondUser'
import submitUserReducer from '../feature/Human-verse-human/submitSlice'
export const history = createBrowserHistory()

const rootReducer = combineReducers({
  router: connectRouter(history) as any,
  counter: counterReducer,
  firstUser: firstUserReducer,
  secondUser: secondUserReducer,
  submitUser: submitUserReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
})

export type AppDispatch = typeof store.dispatch
