import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface authInterface{
    isLoggedIn:boolean,
    userData:object
}

const initialState: authInterface = {
    isLoggedIn:false,
    userData:{}
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout:(state) =>{
            state.isLoggedIn = false
        },
        login:(state) => {
            state.isLoggedIn = true
        }
    }
})


export const {login,logout} = authSlice.actions;
export default authSlice.reducer;