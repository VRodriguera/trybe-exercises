import React, { Component } from 'react';
import Routes from './Components/Routes';
import Home from './Pages/home';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes />
          <Home />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
