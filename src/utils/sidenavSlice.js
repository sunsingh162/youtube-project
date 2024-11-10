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
    hideNav: (state) => {
      state.isNavOpen = false;
    },
  },
});

export default sidenavSlice.reducer;

export const { toggleNav, hideNav } = sidenavSlice.actions;
