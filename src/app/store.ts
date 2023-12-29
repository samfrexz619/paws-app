import { configureStore } from '@reduxjs/toolkit'
import votingReducer from '@/features/votingSlice'

const store = configureStore({
  reducer: {
    voting: votingReducer,
  }
}) 



export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;