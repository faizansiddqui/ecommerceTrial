import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../utils/api';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await fetchProducts();
  return response;
});

const productSlice = createSlice({
  name: 'products',
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        sta+te.items = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
