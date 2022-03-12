import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import { Product } from "../../App/models/products";
import agent from "../../App/api/agent";
import { RootState } from "../../App/store/ConfigureStore";

const productAdapter = createEntityAdapter<Product>();

export const fetchProductAsync = createAsyncThunk<Product[]>(
    'catalog/fetchProductAsync',
    async () => {
        try {
            return await agent.Catalog.list();
        } catch (error) {
            console.log(error);
        }
    }
)

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: productAdapter.getInitialState({
        productsLoaded: false,
        status: 'idle'
    }),
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(fetchProductAsync.pending, (state) => {
            state.status = 'pendingFetchProducts';
        });
        builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
            productAdapter.setAll(state, action.payload);
            state.status = 'idle';
            state.productsLoaded = true;
        });
        builder.addCase(fetchProductAsync.rejected, (state) => {
            state.status = 'idle';
        });
    })
})

export const productSelectors = productAdapter.getSelectors((state: RootState) => state.catalog);