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
       
    <Navbar title = "textutils"  darkmode = {darkmode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm  showalert={showalert} heading = "Eneter your text to Analyze" alert ={alert} darkmode = {darkmode}/>
      <About darkmode = {darkmode}/>
   
    
    </div>
 
    {/* <Navbar  /> */}
    </>
  );
}

export default App;
