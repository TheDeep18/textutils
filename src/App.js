import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enables or not
  const toggleMode = ()=> {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#2a1010"
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      {/* <Navbar title = "Textutils" aboutText = "About Textutils"/> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}

      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyse Below" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
