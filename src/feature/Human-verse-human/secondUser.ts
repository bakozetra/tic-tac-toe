import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAction } from 'connected-react-router'
import { RootState } from '../../app/store'

export const secondUserSlice = createSlice({
  name: 'secondUser',
  initialState: {
    secondUser: '',
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSecondUser: (state, action: PayloadAction<string>) => {
      console.log(state.secondUser)
      state.secondUser = action.payload
    },
  },
})

export const { setSecondUser } = secondUserSlice.actions
export const addSecondUser = (state: RootState) => state.secondUser.secondUser

export default secondUserSlice.reducer
