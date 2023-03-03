import React from 'react';
import { useState } from 'react';
import './style.css'

import Input from './Input';
import Button from './Button';
import { login } from '../scripts/main'

function Form(props) {

  const [type, setType] = useState('Login')

  const buttonAction = (e) => {
    let email = document.querySelector('#emaili').value
    let pass = document.querySelector('#passwordi').value
    if (type === 'Login') {
      login({email, pass}, type)
    } else if (type === 'Sing up') {
      let user = document.querySelector('#useri').value
      login({email, pass, user}, type)
    }
  }

  return (
    <form className='loginf'>
      <div className='title'>{type}</div>
      <div id='inputloginc'>
        <Input text='email'/>
        <Input text='password'/>
        {type === 'Sing up' && <Input text='user'/>}
      </div>
      <div id='buttonloginc'>
        <Button text={type} action={buttonAction}/>
        <button type='button' className='switch' onClick={() => setType(type === 'Login'?'Sing up':'Login')}>
        {type === 'Login'?'Sing up':'Login'}
      </button>
      </div>
    </form>
  )
}

export default Form;