import uiReducer from './uiSlice'
import cartReducer from './cartSlice'

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  ui: uiReducer,
  cart: cartReducer
})

export default rootReducer
