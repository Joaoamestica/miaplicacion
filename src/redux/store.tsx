import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";

export const store = configureStore({
    reducer: {
        productReducers: productSlice.reducer,
        //userReducers: userSlice.reducer, 
    }
})