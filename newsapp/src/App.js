
import './App.css';
import Navbar from './components/Navbar.js'
import React, { Component } from 'react'
import NewsComponent from './components/NewsComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/business"element = {<NewsComponent key='business' pagesize={6} country={"us"} content={"business"}/>}> </Route>
          <Route exact path="/entertainment" element = {<NewsComponent key='entertainment' pagesize={6} country={"us"} content={"entertainment"}/>}> </Route>
          <Route exact path="/technology" element={<NewsComponent key='technology' pagesize={6} country={"us"} content={"technology"}/>}> </Route>
          <Route exact path="/sports" element={<NewsComponent key='sports'  pagesize={6} country={"us"} content={"sports"}/>}> </Route>
          <Route exact path="/health" element={<NewsComponent key='health' pagesize={6} country={"us"} content={"health"}/>}> </Route>
          <Route exact path="/science" element={<NewsComponent key='science' pagesize={6} country={"us"} content={"science"}/>}> </Route>
          <Route exact path="/" element={<NewsComponent key='general' pagesize={6} country={"us"} content={"general"}/>}> </Route>

        </Routes>
        </Router>
      </div>
    )
  }
}

