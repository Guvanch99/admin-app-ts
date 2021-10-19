import {createSlice} from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'Admin',
    initialState: {
        isAdmin: false,
        adminNotFound: false,
        isModal: false
    },
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
