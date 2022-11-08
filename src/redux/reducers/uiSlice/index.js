import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { isCartShown: false },
  reducers: {
    toggleCart(state) {
      state.isCartShown = !state.isCartShown;
    },
  },
});

export const { toggleCart } = uiSlice.actions;

export const selectedUi = state => state.ui;

export default uiSlice.reducer;
