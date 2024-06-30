import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITRatingState {
  [id: string]: number;
}

const initialState: ITRatingState = {};

const ratingsSlice = createSlice({
  name: "ratings",
  initialState,
  reducers: {
    setRating(state, action: PayloadAction<{ id: string; rating: number }>) {
      const { id, rating } = action.payload;
      state[id] = rating;
    },
  },
});

export const { setRating } = ratingsSlice.actions;
export default ratingsSlice.reducer;
