import React from 'react';
import './style.css'

function Input(props){
    return (
        <div className="inputc" id={(props.text + 'ic').replace(/\s/g, '')}>
            <input
                title="pass"
                type={props.text === 'password' ?  props.text : 'text'}
                id={(props.text + 'i').replace(/\s/g, '')}
                // send text
                onChange={props.action && props.action}
                autoComplete="none"
                placeholder={props.text}
            />
        </div>
    );
}

export default Input;