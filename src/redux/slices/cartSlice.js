import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],

  cartTotalPrice: 0,
  cartTotalQuantity:0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
        
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          itemQuantity: state.cartItems[existingIndex].itemQuantity + 1,
        };
      } else {
        let tempState = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(tempState);
      }

    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].itemQuantity > 1) {
        state.cartItems[itemIndex].itemQuantity -= 1;
      } else if (state.cartItems[itemIndex].itemQuantity === 1) {
        let filterItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = filterItems;
      }

    },

    getTotal(state, action) {
      let newTotalPrice = 0;
      let newTotalQuantity = 0;
      state.cartItems.forEach((item) => {
        newTotalPrice += item.price * item.itemQuantity;
        newTotalQuantity += item.itemQuantity;
      });
      state.cartTotalPrice = newTotalPrice;
      state.cartTotalQuantity= newTotalQuantity;
    },
  },
});

export const { addToCart, decreaseCart, getTotal } = cartSlice.actions;

export default cartSlice.reducer;
