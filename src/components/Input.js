import React from 'react';
import './style.css'

import { enterKey } from '../scripts/main';

function Input(props){
    return (
        <div className="inputc" id={(props.text + 'ic').replace(/\s/g, '')}>
            <input
                title="pass"
                type="text"
                id={(props.text + 'i').replace(/\s/g, '')}
                onKeyUp={
                    props.user
                        ? (e) => enterKey(e, props.user, props.chat)
                        : undefined
                }
                autoComplete="none"
                placeholder={props.text}
            />
        </div>
    );
}

export default Input;