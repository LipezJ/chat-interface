import React from 'react';
import './style.css'

function Button(props) {
    return (
        <button 
            onClick={props.action ? props.action : undefined} 
            title={props.text} 
            type= {!props.type ? "button" : props.type}
            id={(props.text + 'b').replace(/\s/g, '')} 
            style={{width: props.width}}
        >
            {props.text}
        </button>
    );
}

export default Button;