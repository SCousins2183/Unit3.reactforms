import { useState } from 'react';
import './App.css';
import SignUpForm from './Components/SignUpForm';
import Authenticate from './Components/Authenticate';
import DarkModeToggle from './Components/DarkModeToggle';


function App() {
  const [token, setToken] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <SignUpForm setToken={setToken} darkMode={darkMode}/>
      <Authenticate token={token} darkMode={darkMode}/>
    </div>
  );
}

export default App;
