import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/index';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

infos = () => {
  const { name, age, email } = this.state;
  return { name, age, email }
}

handleChange = ({target}) => {
  this.setState({
    [target.id]: target.value
  })
}

handleSubmit = (e) => {
  const { addUser } = this.props;
  e.preventDefault()
  addUser(this.infos())
  this.setState({
    name: '',
    age: '',
    email: ''
  })
}

  render() {
    const { name, age, email } = this.state;
    return (
      <div>
        <h2>Cadastrar</h2>
        <form>
          <label htmlFor="name">
            <input id="name" type="text" placeholder="Nome" value={ name } onChange={this.handleChange}/>
          </label>
          <label htmlFor="age">
            <input id="age" type="text" placeholder="Idade" value={ age } onChange={this.handleChange}/>
          </label>
          <label htmlFor="email">
            <input id="email" type="text" placeholder="Email" value={ email } onChange={this.handleChange}/>
          </label>
          <button
            type="submit"
            onClick={(e) => this.handleSubmit(e)}
          >
          cadastrar
          </button>
          <Link to="/registeredCustomers">Lista de usuarios</Link>
        </form>
      </div>
    );
  }
}

const mapDispathToProps = (dispath) => ({
  addUser: newUser => dispath(register(newUser))
})

export default connect(null, mapDispathToProps)(Register);