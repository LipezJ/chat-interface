import React from 'react';
import './style.css';

import { join } from '../scripts/main';

function ChatCard(props) {
    return (
        <div id={props.chat} className='chatcard' onClick={(e) => join(e, props.chat)}>{props.chat}</div>
    );
}

export default ChatCard;