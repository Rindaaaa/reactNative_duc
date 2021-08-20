import { addToCard } from './action/addToCardActions';
import userReducer from "./reducer/userReducer";
import productReducer from "./reducer/productReducer";
import addToCardReducer from './reducer/addToCardReducer';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        userReducer, productReducer, addToCardReducer
    } 
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store