import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import './style.css'

import { useSelector } from 'react-redux';

import ChatsCard from './ChatsCard';
import ChatAlert from './ChatAlert';
import { eCards } from '../scripts/main';


function Chats(props) {
    const chats = useSelector(state => state.chats.value)

    const renderChats = (chats) => {
        console.log(chats)
        return chats.map(({chat, key}) => {
            return <ChatsCard chat={chat} key={key} />
        })
    }

    return (
        <div id='chats'>
            {
                chats.length < 1 ?
                <ChatAlert alert='Unete a un chat' />
                :
                <div id='chatsc'>
                    {renderChats(chats)}
                </div>
            }
        </div>
    );
}

export default Chats;