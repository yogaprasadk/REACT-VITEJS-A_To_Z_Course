import './App.css';
import { useState } from 'react';
import loginbtn from './components/loginbtn';

import logout from './components/logout';

function App(){
  
  const [isloggedin,setLoggedin] = useState(true);
  
  if(isloggedin)
    {
      return (
        <logout/>
      )
    }
  else
  {
      return (
        <loginbtn/>
      )
  }
}
export default App