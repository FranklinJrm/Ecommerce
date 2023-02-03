import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsloading } from "./isLoading.slice";
import getConfig from "../../utils/getConfig";
export const purchases = createSlice({
  name: "purchase",
  initialState: [],
  reducers: {
    setPurchase: (state, action) => action.payload,
  },
});
export const getPurchaseThunk = () => (dispatch) => {
  dispatch(setIsloading(true));
  return axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases`, getConfig())
    .then((res) => dispatch(setPurchase(res.data.data.purchases)))
    .finally(() => dispatch(setIsloading(false)));
};

export const { setPurchase } = purchases.actions;
export default purchases.reducer;
