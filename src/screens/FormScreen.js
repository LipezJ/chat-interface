import React from 'react';
import { useState } from 'react';
import './styles/form.css'

import Form from '../components/Form';

function FormScreen(props) {
  const [type, setType] = useState('Login')
  return (
        <main>
          <div id='banner'></div>
          <Form type={type} setType={setType}/>
        </main>
  );
}

export default FormScreen;