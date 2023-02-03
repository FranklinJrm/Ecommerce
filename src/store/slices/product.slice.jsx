import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsloading } from "./isLoading.slice";
export const products = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});

export const getProductThunk = () => (dispatch) => {
  dispatch(setIsloading(true));
  axios
    .get("https://e-commerce-api-v2.academlo.tech/api/v1/products")
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .finally(() => dispatch(setIsloading(false)));
};
export const filterProductsThunk = (id) => (dispatch) => {
  dispatch(setIsloading(true));
  axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?category=${id}`)
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .finally(() => dispatch(setIsloading(false)));
};
export const filterInputProductsThunk = (inputValue) => (dispatch) => {
    dispatch(setIsloading(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?query=${inputValue}`)
        .then((res) => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsloading(false)));
}

export const { setProducts } = products.actions;

export default products.reducer;
