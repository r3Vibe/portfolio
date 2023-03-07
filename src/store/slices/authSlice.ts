import { createSlice } from "@reduxjs/toolkit";

interface authInterface{
    isLoggedIn:boolean,
    userData:{
        role:string
    }
}

const initialState: authInterface = {
    isLoggedIn:false,
    userData:{
        role:"admin"
    }
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