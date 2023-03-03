import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const initialState = {
    value: []
}

export const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        setChats: (state, action)=> {
            let chats_ = action.payload.map(item => {
                return {chat: item, key: uuidv4()}
            })
            state.value = chats_
        },
        addCard: (state, action) => {
            let newCard = {chat: action.payload, key: uuidv4()}
            state.value.push(newCard)
        }
    }
})

export const { setChats, addCard } = chatsSlice.actions
export default chatsSlice.reducer