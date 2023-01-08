import { configureStore } from "@reduxjs/toolkit";
import { RootReducers } from "./Reducer/RootReducers";

export const store = configureStore({
    reducer: RootReducers
})