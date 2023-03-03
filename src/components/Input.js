import React from 'react';
import './style.css'

import { enterKey } from '../scripts/main';

function Input(props){
    return (
        <div className="inputc" id={(props.text + 'ic').replace(/\s/g, '')}>
            <input
                title="pass"
                type={props.text === 'password' ?  props.text : 'text'}
                id={(props.text + 'i').replace(/\s/g, '')}
                onKeyUp={
                    props.text === 'post'
                        ? enterKey
                        : undefined
                }
                autoComplete="none"
                placeholder={props.text}
            />
        </div>
    );
}

export default Input;