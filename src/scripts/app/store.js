import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/user";
import postsReducer from "./slices/posts";
import chatsReducer from "./slices/chats";

export const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
        chats: chatsReducer
    }
})