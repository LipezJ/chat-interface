import React from 'react';
import './style.css'

function Input(props){
    return (
        <div className='inputc'>
            {props.label ? <label htmlFor='pass'>{props.text}:</label>:('')}
            <input title="pass" type="text" id={props.text}/>
        </div>
    );
}

export default Input;