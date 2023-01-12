import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import './style.css'

import ChatsCard from './ChatsCard';
import ChatAlert from './ChatAlert';
import { eCards } from '../scripts/main';

function Chats(props) {
    const [chats, setChats] = useState([])
    const updateChats = (chats) => {
        let chats_ = chats.map((item) => {
            return <ChatsCard chat={item} key={uuidv4()} />;
        });
        setChats(chats_)
    }
    const addCard = (chat) => {
        setChats(prevCards => [...prevCards, <ChatsCard key={uuidv4()} chat={chat} />]);
    }
    eCards(updateChats, addCard)
    return (
        <div id='chats'>
            {
                chats.length < 1 ?
                <ChatAlert alert='Unete a un chat' />
                :
                <div id='chatsc'>
                    {chats}
                </div>
            }
        </div>
    );
}

export default Chats;