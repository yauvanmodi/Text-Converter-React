import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/Textform';
import React, { useState } from 'react';

 
function App() {
  const [mode, setMode] = useState('light'); 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    
    <Navbar title="Text-Converter " mode={mode} toggleMode={toggleMode}  />
    <TextForm  mode={mode}/>
    <div className="container my-3">

    </div>
    </> 
  );
}

export default App;