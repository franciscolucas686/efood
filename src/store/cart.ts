import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant } from '../pages/Home'

type CartState = {
  item: Restaurant[]
}

const initialState: CartState = {
  item: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addFood: (state, action: PayloadAction<Restaurant>) => {
      state.item.push(action.payload)
    }
  }
})

export const { addFood } = cartSlice.actions
export default cartSlice.reducer
