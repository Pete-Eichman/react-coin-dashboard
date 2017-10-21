import React, { Component } from 'react';
import Fetch from 'react-fetch'
import TestComponent from './TestComponent'
import './App.css';

class App extends Component {
  render(){
   return (
     <Fetch url="https://api.coinmarketcap.com/v1/ticker/bitcoin/">
       <TestComponent/>
     </Fetch>
   )
 }
}

export default App;
