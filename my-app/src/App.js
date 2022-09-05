import TextForm from './components/TextForm';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const[darkmode,setdarkmode] = useState('light');
  const[alert , setalert ] = useState(null);
  const showalert = (message ,type) =>{
       setalert({
        msg :message,
        type : type
       })
  }
  const togglemode =() =>{
    if(darkmode === 'light'){
      setdarkmode('dark')
      document.body.style.backgroundColor = '#375572';
    }
    else{
      setdarkmode('light')
      document.body.style.backgroundColor='white';
    }

  }
  return (
    <>
       
    <Navbar title = "textutils"  darkmode = {darkmode} togglemode={togglemode}/>
    <Alert alert="this is a sample alert"/>
    <div className="container my-3">
    <TextForm  heading = "Eneter your text to Analyze" darkmode = {darkmode}/>
      <About darkmode = {darkmode}/>
   
    
    </div>
 
    {/* <Navbar  /> */}
    </>
  );
}

export default App;
