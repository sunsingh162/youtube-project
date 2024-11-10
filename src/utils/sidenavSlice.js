import { createSlice } from "@reduxjs/toolkit";


const sidenavSlice = createSlice({
  name: "sidenav",
  initialState: {
    isNavOpen: true,
  },
  reducers: {
    toggleNav: (state, action) => {
      state.isNavOpen = !state.isNavOpen;
    },
  },
});

export default sidenavSlice.reducer;

export const { toggleNav } = sidenavSlice.actions;