import { combineReducers, ThunkAction, Action } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './slice/ticTacToeSlice'

export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
