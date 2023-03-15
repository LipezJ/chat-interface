import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const initialState = {
    value: {
        posts: {},
        someone: undefined
    }
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setSomeone: (state, action) => {
            state.value.someone = action.payload
        },
        setPosts: (state, action) => {
            state.value.posts = action.payload
        },
        addPost: (state, action) => {
            const posts_ = {[uuidv4()]: {
                    user: action.payload.user,
                    post: action.payload.post,
                    date: action.payload.date
                }}
            state.value.posts = {...state.value.posts, ...posts_}
        },
        recargePost: (state, action) => {
            state.value.posts = {...action.payload, ...state.value.posts}
        }
    }
})

export const { setSomeone, setPosts, addPost, recargePost } = postSlice.actions
export default postSlice.reducer