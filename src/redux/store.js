import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productSlice";
import cartsReducer from "./features/cart";
const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartsReducer,
  },
});

export default store;
