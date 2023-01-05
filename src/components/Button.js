import React from 'react';
import './style.css'

function Button(props) {
    return (
        <button 
            onClick={props.user === null ? props.action : e => props.action(e, props.user)} 
            title={props.text} 
            type="button" 
            id={(props.text + 'b').replace(/\s/g, '')} 
            style={{width: props.width}}
        >
            {props.text}
        </button>
    );
}

export default Button;