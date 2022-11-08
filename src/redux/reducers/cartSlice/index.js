import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    quantity: 0,
    items: [],
  },
  reducers: {
    addItemToCart(store, action) {
      const newItem = action.payload;
      const existingItem = store.items.find(
        element => element.id === newItem.id);
      if (!existingItem) {
        store.quantity++
        store.items.push({
          name: newItem.name,
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
      }
    },
    removeItemFromCart(store, action){
      const removingItemId = action.payload
      const removingItem = store.items.find(element => element.id === removingItemId)

      console.log(removingItem.quantity);
      if (removingItem.quantity > 1){
        removingItem.quantity--
        removingItem.totalPrice -= removingItem.price
      }else{
        console.log('here!!!');
        store.items = store.items.filter(item => item.id !== removingItemId)
      }
    }
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export const selectedCart = (state) => state.cart

export default cartSlice.reducer;
