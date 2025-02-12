import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioRestaurant } from '../pages/Home'

type ModalState = {
  isOpen: boolean
  selectedFood: CardapioRestaurant | null
}

const initialState: ModalState = {
  isOpen: false,
  selectedFood: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<CardapioRestaurant>) => {
      state.isOpen = true
      state.selectedFood = action.payload
    },
    closeModal: (state) => {
      state.isOpen = false
      state.selectedFood = null
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
