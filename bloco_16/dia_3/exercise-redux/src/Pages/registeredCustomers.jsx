import React, { Component } from 'react';
import { connect } from 'react-redux';

class registeredCustomers extends Component {
  render() {
    const { usersInfo } = this.props;
    return (
      <div>
        <ul>
          {usersInfo.map((userInfo) => (
          <li>
            {userInfo.name}
            {userInfo.age}
            {userInfo.email}
          </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usersInfo: state.usersRegister,
})

export default connect(mapStateToProps, null)(registeredCustomers);