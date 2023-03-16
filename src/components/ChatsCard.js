import React from 'react';
import './style.css';

import { createJoin } from '../scripts/main';

function ChatCard(props) {
    return (
        <div id={props.chat} className='chatcard' onClick={(e) => createJoin(props.chat, 'Join')}>{props.chat}</div>
    );
}

export default ChatCard;