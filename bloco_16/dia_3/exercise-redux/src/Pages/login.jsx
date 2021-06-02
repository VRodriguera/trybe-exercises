import React, { Component } from 'react';

class login extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="nome">
            <input id="nome" type="text" placeholder="Nome" />
          </label>
          <label htmlFor="email">
            <input id="email" type="text" placeholder="Email" />
          </label>
          <button type="button">entrar</button>
        </form>
      </div>
    );
  }
}

export default login;