import React from 'react';
import './style.css'

import { enterKey } from '../scripts/main';

function Input(props){
    return (
        <div className='inputc'>
            {props.label ? <label htmlFor='pass'>{props.text}:</label>:('')}
            <input title="pass" type="text" id={props.text} onKeyUp={props.user ? e => enterKey(e, props.user, props.chat) : undefined}/>
        </div>
    );
}

export default Input;