import './App.css';
import card from './components/card';

function App() {
  // create state
  // manage state
 //  change state

//  usestate
  const [name,setName] = useState('');

  return (
    <div>
    {/* parent component */}
        <card name={name} setName={setName}/>
        <p>{name}</p>
        
        {/* sibilings */}
        <card title="card1" name={name1} setName={name}/>
        <card title="card2" name={name2} setName={name}/>
     </div>
    
  )
}

export default App;
