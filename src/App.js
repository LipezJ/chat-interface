import { createContext, useState } from 'react';

import FormScreen from './screens/FormScreen';
import ChatScreen from './screens/ChatScreen'

export const userContext = createContext()

function App() {
  const [user, setUser] = useState(null)
  return (
    <userContext.Provider value={{user, setUser}}>
      { user === null ?
        <FormScreen />
        :
        <ChatScreen />
      }
    </userContext.Provider>
  );
}

export default App