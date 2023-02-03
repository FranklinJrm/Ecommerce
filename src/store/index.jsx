import { configureStore } from "@reduxjs/toolkit";
import cartProducts  from "./slices/cartProducts.slice";
import isLoading from "./slices/isLoading.slice";
import products from "./slices/product.slice";
import purchases from "./slices/purchases.slice";
export default configureStore({
  reducer: {
    products: products,
    isLoading: isLoading,
    purchase: purchases,
    cartProducts: cartProducts,
    },
});
