import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState:any = {
    products: []
}

export const productSlice = createSlice({

    name: "carro",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<any>) => {
            state.products.push(action.payload)
        },
        //deleteProduct...
        //getAllProducts....
    },
});

export const { addProduct } = productSlice.actions;
export default productSlice;