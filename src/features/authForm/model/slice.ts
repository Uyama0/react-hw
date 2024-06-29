import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  isLogged: boolean;
}

const initialState: IAuthState = {
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogged(state, action: PayloadAction<boolean>) {
      state.isLogged = action.payload;
    },
  },
});

export const { setLogged } = authSlice.actions;
export default authSlice.reducer;
