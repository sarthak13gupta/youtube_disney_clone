import {configureStore , getDefaultMiddleware} from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.jsx"
export default configureStore({
    reducer:{
        user: userReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),

});