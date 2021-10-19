import adminReducer from "./adminSlice";
import crudSlice from './crudSlice'
import filterSlice from './filterSlice'

export const reducer = {
    admin: adminReducer,
    crud:crudSlice,
    filter:filterSlice
}