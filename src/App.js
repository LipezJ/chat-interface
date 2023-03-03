import { Fragment } from 'react';

import { useSelector } from 'react-redux';

import FormScreen from './screens/FormScreen';
import ChatScreen from './screens/ChatScreen'

function App() {

  const user = useSelector((state) => state.user.value)

  return (
      <Fragment>
        { user === undefined ?
          <FormScreen />
          :
          <ChatScreen />
        }
      </Fragment>
  )
}

export default App