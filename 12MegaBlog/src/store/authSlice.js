import { createSlice } from "@reduxjs/toolkit";
import { status } from "express/lib/response";

const initialState = {
    status : false,
    userData : nulll
}
const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {
        login: (store, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;