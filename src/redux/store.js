
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authslice';
import productReducer from './slice/productSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer, 
  },
});
console.log("Auth file loaded");

export default store;
