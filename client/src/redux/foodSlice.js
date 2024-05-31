import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    food: [],
  },
  reducers: {
    setFood: (state, action) => {
      state.food = action.payload;
    },
  },
});

export const { setFood } = foodSlice.actions;
export default foodSlice.reducer;
