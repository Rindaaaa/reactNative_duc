import userReducer from "./reducer/userReducer";
import productReducer from "./reducer/productReducer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        userReducer, productReducer
    } 
})