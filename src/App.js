import React from 'react';

import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import { useState } from 'react';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    Type:type
  })


  setTimeout(()=>{
    setAlert(null);
  },
 3000 )
};

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='gray';
      showAlert("Dark Mode Enabled","success");
      document.title="Text Editor - Dark Mode Enabled";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","normal Mode");
      document.title="Text Editor - Light Mode Enabled";
    }
  }
  return (
    <>
   <Router>
<Navbar title="TextEditor" aboutTexts="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
 <div className="container my-3">
 <Routes>
          <Route exact path="/about" element={<About/>}>
          
          
          </Route>
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text here" mode={mode}/>}>
          
          </Route>
        </Routes>
</div> 
</Router>
    </>
  );
}

export default App;
