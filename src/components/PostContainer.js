import React from 'react';
import './style.css'

import Input from './Input';
import Button from './Button';
import { send } from '../scripts/main'

function PostContainer(props) {
  return (
    <div id='postc'>
        <div id="someone">Someone</div>
            <div id="posts"></div>
            <div id="text">
                <Input text='post'/>
                <Button text='send' user={props.user} action={send}/>
         </div>
    </div>
  );
}

export default PostContainer;