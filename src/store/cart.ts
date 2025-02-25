import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { CardapioRestaurant } from '../pages/Home'
import { RootReducer } from '.'

type CartState = {
  items: CardapioRestaurant[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addFood: (state, action: PayloadAction<CardapioRestaurant>) => {
      const food = state.items.find((item) => item.id === action.payload.id)

      if (!food) {
        state.items.push(action.payload)
      } else {
        alert('A refeição escolhida já está no carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const selectTotalPrice = createSelector(
  [(state: RootReducer) => state.cart.items],
  (items) => items.reduce((total, item) => total + item.preco, 0)
)

export const { addFood, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
