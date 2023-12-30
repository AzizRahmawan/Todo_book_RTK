import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../carItems.js";
//import { useDispatch } from "react-redux";

const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => total + (item.price * item.amount), 0);
};

const initialState = {
    cartItems: cartItems,
    amount: cartItems.length,
    priceTotal: calculateTotalPrice(cartItems),
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.priceTotal = calculateTotalPrice(state.cartItems);
            state.amount = 0;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
            state.priceTotal = calculateTotalPrice(state.cartItems);
        },
        increas: (state, action) => {
            const itemIdToIncrease = action.payload;
            const itemToIncrease = state.cartItems.find((item) => item.id === itemIdToIncrease);
      
            if (itemToIncrease) {
              itemToIncrease.amount += 1;
              state.amount += 1;
              state.priceTotal = calculateTotalPrice(state.cartItems);
            }
        }, 
        decreas: (state, action) => {
            
            const itemIdToDecrease = action.payload;
            const itemToDecrease = state.cartItems.find((item) => item.id === itemIdToDecrease);
      
            if (itemToDecrease && itemToDecrease.amount > 0) {
              itemToDecrease.amount -= 1;
              state.amount -= 1;
              state.priceTotal = calculateTotalPrice(state.cartItems);
              if (itemToDecrease.amount === 0) {
                state.cartItems = state.cartItems.filter((item) => item.id !== itemIdToDecrease);
              }
            }
        }
        
    }
});



console.log(cartSlice.getInitialState())
export const { clearCart, removeItem, increas, decreas } = cartSlice.actions;
export default cartSlice.reducer;