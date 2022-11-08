import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  isShown: false
};

const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      if (action.payload) {
        state.counter += action.payload;
      } else {
        state.counter += 1;
      }
    },
    decrement(state) {
      state.counter -= 1;
    },
    toggle(state) {
      state.isShown = !state.isShown;
    }
  }
});

export const { increment, decrement, toggle } = counter.actions;

export const selectedCounter = (state) => state.counter;

export default counter.reducer;
