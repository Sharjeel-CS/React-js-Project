import { configureStore } from '@reduxjs/toolkit'

import userDetailsReducer from '../features/UserDetailSlice'


export const store = configureStore({
    reducer: {
      app: userDetailsReducer,
    },
  })
  