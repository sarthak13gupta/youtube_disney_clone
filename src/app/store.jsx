import {configureStore , getDefaultMiddleware} from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.jsx";
import movieReducer from "../features/movie/movieSlice.jsx";


export default configureStore({
    reducer:{
        user: userReducer,
        movie: movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),

});