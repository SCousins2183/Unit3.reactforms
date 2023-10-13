import { useState } from 'react'
import './App.css'
import SignUpForm from './Components/SignUpForm'
import Authenticate from './Components/Authenticate'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
    
    <SignUpForm token={token} setToken={setToken} />
    <Authenticate token={token} setToken={setToken}/>
    </>
  );
}

export default App
