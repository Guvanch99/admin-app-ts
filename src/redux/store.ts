import {configureStore} from "@reduxjs/toolkit";

import {rootReducer} from "./";

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}))
})

export type AppStore=ReturnType<typeof configureStore>
export type AppDispatch=AppStore['dispatch']
