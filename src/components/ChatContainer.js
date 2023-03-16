import React, { useState } from 'react';
import './style.css'

import Button from './Button';
import Input from './Input';
import Chats from './Chats';
import { logout, createJoin } from '../scripts/main'

function ChatContainer(props) {

  const [chatName, setChatName] = useState('')

  const action = (e) => {
    e.preventDefault()
    createJoin(chatName, e.target.innerText)
  }

  return (
    <div id='chatc'>
        <div id='ownerc'>
            <div id='owner'>{props.user}</div>
            <Button text='Log out' action={logout}/>
        </div>
        <Chats />
        <form id='createjoin'>
            <Input text='chat' action={e => {setChatName(e.target.value)}} />
            <div id='buttonc'>
                <Button text='Join' width='35%' user={props.user} action={action} type='submit' />
                <Button text='Create' width='35%'  user={props.user} action={action} type='submit'/>
            </div>
        </form>
    </div>
  );
}

export default ChatContainer;