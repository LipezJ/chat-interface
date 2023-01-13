import React, { createContext, useState } from 'react';
import './style.css'

import Form from '../components/Form';

export const TypeContext = createContext()

function FormScreen(props) {
  const [type, setType] = useState('Login')
  return (
      <TypeContext.Provider value={{type, setType}}>
        <main>
          <Form/>
        </main>
      </TypeContext.Provider>
  );
}

export default FormScreen;