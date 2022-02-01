import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enables or not
  const [alert, setAlert] = useState(null);
  // const [bg, setBg] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#8a1a25"
      document.title = 'TextUtils - Dark Mode'
      showAlert("Enabled dark mode", "success")

    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.title = 'TextUtils - Light Mode'
      showAlert("Enabled light mode", "success")
    }


  }
  // const bgChange = (event) => {
  //   if (mode === "primary") {
  //     setMode("primary")
  //     document.body.style.backgroundColor = "primary"
  //     showAlert("Enabled dark mode", "success")
  //     console.log("primary was clicked");

  //   }
  //   else if (mode === "success") {
  //     setMode("success")
  //     document.body.style.backgroundColor = "success"
  //     showAlert("Enabled dark mode", "success")

  //   }
  // }

  return (
    <>
      {/* <Router> */}
        {/* <Navbar title = "Textutils" aboutText = "About Textutils"/> */}
        <Navbar title="Textutils" toggleMode={toggleMode} mode={mode} /*bgChange={bgChange}*/ />
        {/* <Navbar/> */}

        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about" element = {<About/>} />
            <Route path="/textform" element={< TextForm heading={"Enter The Text To Analyse Below"} mode={mode} showAlert={showAlert} />} */}
            
            < TextForm heading={"Enter The Text To Analyse Below"} mode={mode}  showAlert={showAlert} />
          
              
            {/* /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}


    </>
  );
}

export default App;



