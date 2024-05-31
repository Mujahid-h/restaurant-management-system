import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    food: [],
    cartItems: {},
  },
  reducers: {
    setFood: (state, action) => {
      state.food = action.payload;
    },
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
  },
});

export const { setFood, addToCart, removeFromCart } = foodSlice.actions;
export default foodSlice.reducer;
