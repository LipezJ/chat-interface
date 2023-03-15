import React from 'react';
import { useState } from 'react';
import './style.css'

import Input from './Input';
import Button from './Button';
import { login } from '../scripts/main'

function Form(props) {

  const [type, setType] = useState('Login')
  const [formValues, setFormValues] = useState({user: '', pass: '', email: ''})
  const {user, pass, email} = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    const loginData = {
      email,
      pass,
      user: type === 'Sing up' ? user : null,
    }
    login(loginData, type)
  }

  return (
    <form className='loginf' onSubmit={handleSubmit}>
      <div className='title'>{type}</div>
      <div id='inputloginc'>
        <Input text='email' action={e => setFormValues({...formValues, email: e.target.value})}/>
        <Input text='password' action={e => setFormValues({...formValues, pass: e.target.value})}/>
        {type === 'Sing up' && <Input text='user' action={e => setFormValues({...formValues, user: e.target.value})}/>}
      </div>
      <div id='buttonloginc'>
        <Button text={type} type='submit'/>
        <button type='button' className='switch' onClick={() => setType(type === 'Login'?'Sing up':'Login')}>
          {type === 'Login'?'Sing up':'Login'}
        </button>
      </div>
    </form>
  )
}

export default Form;