import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./Reducers/Slice";

export const store=configureStore({
    reducer:{
        Name: nameSlice,
    },
});