import {configureStore} from "@reduxjs/toolkit";
import saga from 'redux-saga'
import logger from 'redux-logger'

import {reducer} from "./";
import rootSaga from './saga'

const sagaMiddleware = saga()

export default configureStore({
    reducer,
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
        thunk: false
    }).concat(sagaMiddleware,logger))
})

sagaMiddleware.run(rootSaga)