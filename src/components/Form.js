import React from 'react';
import { TypeContext } from '../screens/FormScreen';
import { userContext } from '../App';
import './style.css'

import Input from './Input';
import Button from './Button';
import { login } from '../scripts/main'

function Form(props) {
  return (
      <userContext.Consumer>
        {({user, setUser}) => {
          return (
            <TypeContext.Consumer>
              {({type, setType}) => {
                  return (
                  <div className='loginf'>
                    <div className='title'>{type}</div>
                    <div id='inputloginc'>
                      <Input text='email'/>
                      <Input text='password'/>
                      {type === 'Sing up' && <Input label='true' text='user'/>}
                    </div>
                    <div id='buttonloginc'>
                      <Button text={type} action={login} user={setUser} chat={type}/>
                      <button className='switch' onClick={() => setType(type === 'Login'?'Sing up':'Login')}>
                      {type === 'Login'?'Sing up':'Login'}
                    </button>
                    </div>
                  </div> 
                )
              }}
            </TypeContext.Consumer>
          )
        }}
      </userContext.Consumer>
  );
}

export default Form;