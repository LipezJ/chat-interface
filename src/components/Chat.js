import React from 'react';
import './style.css'

import { useSelector } from 'react-redux';

import ChatContainer from './ChatContainer';
import PostContainer from './PostContainer';

function Chat(props) {

  const user = useSelector((state) => state.user.value)

  return (
    <div id='chat'>
        <ChatContainer user={user}/>
        <PostContainer user={user}/>
    </div>
  );
}

export default Chat;