import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState:any = {
    products: []
}

export const productSlice = createSlice({

    name: "carro",
    initialState,
    reducers: {
        // La mayoria de los reducer son el CRUD
        addProduct: (state, action) => {
            //Almacenamiento en el store (redux)
            const payload = action.payload;
            state.products.push(payload);

            //respaldo en localStorage
            localStorage.setItem("cart", JSON.stringify(state.products));
        },
        deleteProduct: (state, action: PayloadAction<any>) => {
            state.products = state.products.filter((product: any) => product.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.products));
        },
        getAllProducts: (state) => {
            return {
                ...state,
                products: state.products,
            };
        }
    },
});

export const { addProduct, deleteProduct, getAllProducts } = productSlice.actions;
export default productSlice;