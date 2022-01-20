import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.repetirCadena=this.repetirCadena.bind(this)
    this.state={
      cadena:""
    }
  }
  repetirCadena(event){
    this.setState({
      cadena:event.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" value={this.state.cadena} onChange={this.repetirCadena} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.cadena}</p>
      </div>
    )
  }
}

export default App;
