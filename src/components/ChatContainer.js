import React from 'react';
import './style.css'

import Button from './Button';
import Input from './Input';
import { logout, create, join } from '../scripts/main'

function ChatContainer(props) {
  return (
    <div id='chatc'>
        <div id='ownerc'>
            <div id='owner'>{props.user}</div>
            <Button text='Log out' user={props.setUser} action={logout}/>
        </div>
        <div id='createjoin'>
            <Input text='createjoini' />
            <div id='buttonc'>
                <Button text='Join' width='35%' user={props.user} action={join}/>
                <Button text='Create' width='35%'  user={props.user} action={create}/>
            </div>
        </div>
    </div>
  );
}

export default ChatContainer;