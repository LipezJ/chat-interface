import React from 'react';
import './style.css'

function ChatAlert(props){
    return (
        <div className='chatalert'>
            <div>{props.alert}</div>
        </div>
    );
}

export default ChatAlert;