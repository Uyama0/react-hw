import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISearchParams {
  searchParams: string;
}

const initialState: ISearchParams = {
  searchParams: "",
};

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    setQuerySearchParams(state, action: PayloadAction<string>) {
      state.searchParams = action.payload;
    },
  },
});

export const { setQuerySearchParams } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
