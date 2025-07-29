import { configureStore } from "@reduxjs/toolkit"
import blogReducer from "./slices/blogSlice"
import servicesReducer from "./slices/servicesSlice"
import portfolioReducer from "./slices/portfolioSlice"
import teamReducer from "./slices/teamSlice"

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    services: servicesReducer,
    portfolio: portfolioReducer,
    team: teamReducer,
  },
})
