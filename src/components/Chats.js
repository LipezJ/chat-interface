import React from 'react';
import './style.css'

import { useSelector } from 'react-redux';

import ChatsCard from './ChatsCard';
import ChatAlert from './ChatAlert';


function Chats(props) {
    const chats = useSelector(state => state.chats.value)

    const renderChats = (chats) => {
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