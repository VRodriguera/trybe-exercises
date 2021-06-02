import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/home';
import Login from '../Pages/login';
import Register from '../Pages/register';
import RegisteredCustomers from '../Pages/registeredCustomers';


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/login' component={ Login } />
        <Route path='/register' component={ Register } />
        <Route path='/registeredCustomers' component={ RegisteredCustomers } />
      </Switch>
    );
  }
}

export default Routes;