import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)

    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 100,
      numeroDeCliques3: 1000
    }
  }

  handleClick1() {
    this.setState((estadoAnterior1, _props) => ({
      numeroDeCliques1: estadoAnterior1.numeroDeCliques1 + 1
    }))

  }

  handleClick2() {
    this.setState((estadoAnterior2, _props) => ({
      numeroDeCliques2: estadoAnterior2.numeroDeCliques2 + 1
    }))
  }

  handleClick3() {
    this.setState((estadoAnterior3, _props) => ({
      numeroDeCliques3: estadoAnterior3.numeroDeCliques3 + 1
    }))
  }

render() {
  return (
    <>
      <button onClick={this.handleClick1}>{this.state.numeroDeCliques1}</button>
      <button onClick={this.handleClick2}>{this.state.numeroDeCliques2}</button>
      <button onClick={this.handleClick3}>{this.state.numeroDeCliques3}</button>
    </>
  )
}
}

export default App;
