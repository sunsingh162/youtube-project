import { configureStore } from "@reduxjs/toolkit"
import sidenavReducer from "./sidenavSlice"
import searchReducer from "./searchSlice"

const appStore = configureStore({
   reducer: {
     sidenav: sidenavReducer,
     search: searchReducer
   }
})

export default appStore