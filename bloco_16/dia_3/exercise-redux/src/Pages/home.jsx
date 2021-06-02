import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class home extends Component {
  render() {
    return (
      <>
      <header>
        <Link to="/login" />
        <Link to="/register" />
      </header>
      <h2>Home</h2>
      </>
    );
  }
}

export default home;