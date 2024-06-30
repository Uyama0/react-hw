import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  isLogged: boolean;
  token?: string;
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
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { setLogged, setToken } = authSlice.actions;
export default authSlice.reducer;
