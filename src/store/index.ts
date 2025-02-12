import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import cartReducer from './cart'

import modalReducer from './modal'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
