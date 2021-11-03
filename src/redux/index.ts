import {combineReducers} from '@reduxjs/toolkit'

import adminReducer from "./adminSlice";
import crudSlice from './crudSlice'
import filterSlice from './filterSlice'

export const rootReducer = combineReducers({
  admin: adminReducer,
  crud: crudSlice,
  filter: filterSlice
})

export type RootState = ReturnType<typeof rootReducer>
