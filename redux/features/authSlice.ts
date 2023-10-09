import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: {},
}

export const auth = createSlice({
  name: "search",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = auth.actions

export default auth.reducer;
