import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/index';

class Register extends Component {

  infos = () => {
    return {
      name: document.querySelector('#nome').value,
      age: document.querySelector('#idade').value,
      email: document.querySelector('#email').value,
    }
  }
  render() {
    const { addUser, state } = this.props;
    return (
      <div>
        <h2>Cadastrar</h2>
        <form>
          <label htmlFor="nome">
            <input id="nome" type="text" placeholder="Nome" />
          </label>
          <label htmlFor="idade">
            <input id="idade" type="text" placeholder="Idade" />
          </label>
          <label htmlFor="email">
            <input id="email" type="text" placeholder="Email" />
          </label>
          <button
            type="button"
            onClick={addUser([...state, this.infos])}
          >
          cadastrar
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
})

const mapDispathToProps = (dispath) => ({
  addUser: state => dispath(register(state))
})

export default connect(mapStateToProps, mapDispathToProps)(Register);