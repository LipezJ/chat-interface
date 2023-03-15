import React from 'react';
import './style.css'

import Button from './Button';
import Input from './Input';
import Chats from './Chats';
import { logout, create, join } from '../scripts/main'

function ChatContainer(props) {
  return (
    <div id='chatc'>
        <div id='ownerc'>
            <div id='owner'>{props.user}</div>
            <Button text='Log out' action={logout}/>
        </div>
        <Chats />
        <form id='createjoin'>
            <Input text='chat' />
            <div id='buttonc'>
                <Button text='Join' width='35%' user={props.user} action={join}/>
                <Button text='Create' width='35%'  user={props.user} action={create}/>
            </div>
        </form>
    </div>
  );
}

export default ChatContainer;