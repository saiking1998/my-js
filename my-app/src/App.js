import TextForm from './components/TextForm';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
 
} from "react-router-dom";
function App() {
  const[darkmode,setdarkmode] = useState('light');
  const[alert , setalert ] = useState(null);
  const showalert = (message ,type) =>{
       setalert({
        msg :message,
        type : type
       })
       setTimeout(()=>{
       setalert ( null);
       },1500)
  }
  const togglemode =() =>{
    if(darkmode === 'light'){
      setdarkmode('dark')
      document.body.style.backgroundColor = '#375572';
      showalert("darkmode has been enabled","success")
    }
    else{
      setdarkmode('light')
      document.body.style.backgroundColor='white';
      showalert("lightmode has been enabled","success")
    }

  }
  return (
    <>
      <Router> 
    <Navbar title = "textutils"  darkmode = {darkmode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      
         <Routes>
               <Route exact path="/About" element={<About darkmode={darkmode}/>}>
                
                </Route>
            
                <Route exact path="/" element={<TextForm  showalert={showalert} heading = "Eneter your text to Analyze" alert ={alert} darkmode = {darkmode}/>}>
              
             </Route>
           </Routes>
           </div>
        </Router>
      
   
    

 
    {/* <Navbar  /> */}
    </>
  );
}

export default App;
