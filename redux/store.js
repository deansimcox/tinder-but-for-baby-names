import { configureStore } from '@reduxjs/toolkit'
import { nameApi } from './features/api/apiSlice'
import genderReducer from './genderSlice'

export const store = configureStore({
  reducer: {
    [nameApi.reducerPath]: nameApi.reducer,
    gender: genderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nameApi.middleware),
})
