import { createSlice } from "@reduxjs/toolkit";
// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const isLoading = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    setIsloading:(state,action) => action.payload
  },
});
export const {setIsloading} = isLoading.actions;
export default isLoading.reducer;
