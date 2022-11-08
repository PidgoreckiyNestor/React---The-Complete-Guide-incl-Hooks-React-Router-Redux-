import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name:'ui',
  initialState:{isCartShown: false},
  reducers:{
    toggle(state){
      state.isCartShown = !state.isCartShown
    }
  }
})

const {toggle} = uiSlice.actions

const selectedUi = state => state.ui

export default uiSlice
