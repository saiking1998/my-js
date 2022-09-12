
import './App.css';
import Navbar from './components/Navbar.js'
import React, { Component } from 'react'
import NewsComponent from './components/NewsComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar/>
        <NewsComponent  pagesize={6} country={"us"} content={"business"}/>
      </div>
    )
  }
}

