import './App.css';
import Navbar from './components/NavBar.js'
import React, { useState } from 'react'
import NewsComponent from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
function App () {

  const pageSize =6;
  const  apiKey = process.env.REACT_APP_NEWS_API

  // state = {
  //   progress:0
  // }

  // setProgress = (progress)=>{
  //   this.setState({progress: progress})
  // }
    let [Progress ,setProgress ] = useState(0)
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={Progress} 
     />
        <Routes>
          <Route exact path="/business"element = {<NewsComponent key='business' setProgress ={setProgress} pagesize={pageSize} country={"us"} apiKey={apiKey} content={"business"}/>}> </Route>
          <Route exact path="/entertainment" element = {<NewsComponent key='entertainment' setProgress ={setProgress} pagesize={pageSize} country={"us"} apiKey={apiKey} content={"entertainment"}/>}> </Route>
          <Route exact path="/technology" element={<NewsComponent key='technology' setProgress ={setProgress} pagesize={pageSize} country={"us"} apiKey={apiKey} content={"technology"}/>}> </Route>
          <Route exact path="/sports" element={<NewsComponent key='sports' setProgress ={setProgress} pagesize={pageSize} country={"us"} apiKey={apiKey} content={"sports"}/>}> </Route>
          <Route exact path="/health" element={<NewsComponent key='health' setProgress ={setProgress} pagesize={pageSize} country={"us"} apiKey={apiKey} content={"health"}/>}> </Route>
          <Route exact path="/science" element={<NewsComponent key='science' setProgress ={setProgress} pagesize={pageSize} country={"us"}apiKey={apiKey}  content={"science"}/>}> </Route>
          <Route exact path="/" element={<NewsComponent key='general' setProgress ={setProgress} pagesize={pageSize} country={"us"} apiKey={apiKey} content={"general"}/>}> </Route>
          <Route exact path="/general" element={<NewsComponent key='general' setProgress ={setProgress} pagesize={pageSize} country={"us"} apiKey={apiKey} content={"general"}/>}> </Route>

        </Routes>
        </Router>
      </div>
    )
  
}
export default App;