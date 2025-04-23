// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../store/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
