import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./CartSlice";
import { counterSlice } from "./counterSlice";
import { authSlice } from "./FormSlice";

export const store = configureStore({
  reducer: {
    counterStore: counterSlice.reducer,
    addToCart: CartSlice.reducer,
    auth: authSlice.reducer,
  },
});
