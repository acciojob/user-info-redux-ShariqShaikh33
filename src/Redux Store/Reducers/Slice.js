import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name: "",
    email: "",
}

export const nameSlice=createSlice({
    name: "Name",
    initialState,
    reducers:{
        updateName: (state, action)=>{
            state.name = action.payload;
        },
        updateEmail: (state,action)=>{
            state.email = action.payload;
        }
    }
})

export const {updateName, updateEmail} = nameSlice.actions;

export default nameSlice.reducer;