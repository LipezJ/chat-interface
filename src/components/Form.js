import React from 'react';
import './style.css'

import Input from './Input';
import Button from './Button';

function Form(props) {
  return (
      <div className='loginf'>
          <div className='title'>{props.type}</div>
          <Input label='true' text='user'/>
          <Input label='true' text='password'/>
          {props.type === 'Sing up' ? <Input label='true' text='email'/>:('')}
          <Button text={props.type} width='35%' />
          <button className='switch' onClick={e => props.setType(props.type === 'Login'?'Sing up':'Login')}>
            {props.type === 'Login'?'Sing up':'Login'}
          </button>
      </div>
  );
}

export default Form;