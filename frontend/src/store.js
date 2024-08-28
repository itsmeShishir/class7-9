import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState.cart,
    reducers:{
        addToCart:(state, action) =>{
            state.push(action.payload);
        }
    }
});

export const { addToCart } = cartSlice.actions;

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
    }
})

export default store;

