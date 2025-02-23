import { configureStore } from '@reduxjs/toolkit'
import  boxSlice  from './features/box/boxSlice'

export const store = configureStore({
  reducer: {
    box: boxSlice,
  },
})