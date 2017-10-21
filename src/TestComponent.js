import React, { Component } from 'react';

class TestComponent extends Component{
  render(){
    console.log(this.props[0]);
    const coin = Object.entries(this.props).map(([key,value])=>{
      return (
        <div>
          <h1>{value.name.toString()}</h1>
          <h2>${value.price_usd.toString()}</h2>
        </div>
      );
    })
    return (
      <div>
        {coin}
      </div>
    )
  }
}

export default TestComponent
