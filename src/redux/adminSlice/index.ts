import {createSlice} from "@reduxjs/toolkit";

interface IAdminState{
    isAdmin:boolean
    adminNotFound:boolean
    isModal:boolean
}
const initialState:IAdminState= {
    isAdmin: false,
    adminNotFound: false,
    isModal: false
}

const adminSlice = createSlice({
    name: 'Admin',
    initialState,
    reducers: {
        loginAdmin(state) {
            state.isAdmin = true
        },
        adminError(state) {
            state.adminNotFound = true
        },
        logOut(state) {
            state.isAdmin = false
        }
    },
})

export const {loginAdmin, logOut, adminError} = adminSlice.actions

export default adminSlice.reducer
