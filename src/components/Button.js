import React from 'react';
import './style.css'
import { login } from '../scripts/main'

function Button(props) {
    return (
        <button 
            onClick={login} 
            title={props.text} 
            type="button" 
            id="loginb" 
            style={{width: props.width}}
        >
            {props.text}
        </button>
    );
}

export default Button;