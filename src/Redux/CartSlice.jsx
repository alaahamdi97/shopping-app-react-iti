import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  cartList: [],
  quantity: 0,
};
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartList[itemIndex].quantity += 1;
      } else {
        const Product = { ...action.payload, quantity: 1 };
        state.cartList.push(Product);
        state.cartCount = state.cartList.length;
      }
    },

    removeProduct: (state, action) => {
      state.cartList = state.cartList.filter((product) => {
        return product.id !== action.payload.id;
      });
      state.counter -= action.payload.quant;
      state.cartCount = state.cartList.length;
    },
  },
});

export const { addToCart } = CartSlice.actions;
export const { removeProduct } = CartSlice.actions;
