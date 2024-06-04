import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: {},
  },
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      if (!state.cartItems[itemId]) {
        state.cartItems[itemId] = 1;
      } else {
        state.cartItems[itemId] += 1;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      if (state.cartItems[itemId]) {
        state.cartItems[itemId] -= 1;
      }
    },
    deleteFromCart: (state, action) => {
      const itemId = action.payload;
      if (state.cartItems[itemId]) {
        delete state.cartItems[itemId];
      }
    },
  },
});

export const { cartItems, addToCart, removeFromCart, deleteFromCart } =
  cartSlice.actions;

export const getTotalCartAmount = (state) => {
  const { cartItems } = state.cart;
  const { food } = state.food; // Assuming the food data is in the 'food' slice
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = food.find((product) => product._id === item);
      totalAmount += itemInfo.price * cartItems[item];
    }
  }
  return totalAmount;
};

export default cartSlice.reducer;
