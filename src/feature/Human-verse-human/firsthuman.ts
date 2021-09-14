import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAction } from 'connected-react-router'
import { RootState } from '../../app/store'
export const firstUserSlice = createSlice({
  name: 'firstUser',
  initialState: {
    firstUser: '',
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setFirstUser: (state, action: PayloadAction<string>) => {
      state.firstUser = action.payload
    },
  },
})

export const { setFirstUser } = firstUserSlice.actions
export const addfirstUser = (state: RootState) => state.firstUser.firstUser
export default firstUserSlice.reducer
