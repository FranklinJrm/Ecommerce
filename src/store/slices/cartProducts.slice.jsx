import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setIsloading } from "./isLoading.slice";
export const cartProducts = createSlice({
  name: "cartProducts",
  initialState: [],
  reducers: {
    setCartProducts: (state, action) =>{
        return action.payload
    } 
  },
});
export const getCartProductThunk = () => (dispatch) => {
  dispatch(setIsloading(true));
  return axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/cart`,getConfig())
    .then((res) => dispatch(setCartProducts(res.data)))
    .finally(() => dispatch(setIsloading(false)));
};
export const postCartProductThunk = (add) => (dispatch) => {
    dispatch(setIsloading(true));
    return axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/cart',add, getConfig())
        .then(() => dispatch(getCartProductThunk()))
        .finally(() => dispatch(setIsloading(false)));
}
export const postPurchasesCart = () => (dispatch) => {
  dispatch(setIsloading(true));
  return axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/purchases',{}, getConfig())
      .then(() => dispatch(setCartProducts([])))
      .finally(() => dispatch(setIsloading(false)));
}
export const { setCartProducts } = cartProducts.actions;
export default cartProducts.reducer;
