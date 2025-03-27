import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    loading: false,
    error: null,
};

export const getProducts = createAsyncThunk('products/fetch', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error.message); // ✅ Corrected
    }
});

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // ✅ Now using action.payload
            });
    },
});

export default ProductSlice.reducer;
