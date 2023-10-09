import { createSlice } from "@reduxjs/toolkit";

type SearchState = {
  searchTerm: string;
};

const initialState = {
  searchTerm: "",
} as SearchState;

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearch } = search.actions;
export default search.reducer;
