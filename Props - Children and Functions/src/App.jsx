import { useState } from 'react';

import './App.css'

import Button from './components/Button.jsx'

import card from './components/card.jsx'
function App() {
 
  const [count,setcount] = useState(0);

  function handleclick() {
    setcount(count + 1);
  }

  return (
    <div>
    {/* writing inside the card denoted as childrens (it will print the children)*/}
    {/* if you dont write any content inside the card component then it will print name of yogaprasad */}
          <card name="Yogaprasad">
            <h1>Hello Jee</h1>
            <p>Welcome to props</p> 
          </card>

          <Button handleclick={handleclick} text="clickme">
            <h1>{count}</h1>
          </Button>
    </div>
    
  )
}

export default App;
