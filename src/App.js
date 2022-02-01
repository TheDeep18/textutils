import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enables or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      return null
    }, 1500); 

  }
  const toggleMode = ()=> {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#2a1010"
      showAlert("Enabled dark mode", "success")
      
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Enabled light mode", "success")
    }
  }


  return (
    <>
      {/* <Navbar title = "Textutils" aboutText = "About Textutils"/> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}

      <Alert alert={alert}/>

      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyse Below" mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;



