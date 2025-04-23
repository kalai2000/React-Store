// src/store/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: [], // Will be populated with products
  reducers: {
    setProducts: (state, action) => {
      return action.payload; // Replace entire state with product list
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
