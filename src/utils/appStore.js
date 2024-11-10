import { configureStore } from "@reduxjs/toolkit"
import sidenavReducer from "./sidenavSlice"

const appStore = configureStore({
   reducer: {
     sidenav: sidenavReducer
   }
})

export default appStore