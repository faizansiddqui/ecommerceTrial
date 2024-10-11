import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import blogReducer from './blogSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    blogs: blogReducer,
    auth: authReducer,
  },
});

export default store;
