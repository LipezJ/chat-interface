import React from 'react';
import './style.css'

import { userContext } from '../App';
import ChatContainer from './ChatContainer';
import PostContainer from './PostContainer';

function Chat(props) {
  return (
    <userContext.Consumer>
        {({user, setUser}) => {
            return (
                <div id='chat'>
                    <ChatContainer user={user} setUser={setUser} />
                    <PostContainer user={user}/>
                </div>
            )
        }}
    </userContext.Consumer>
  );
}

export default Chat;