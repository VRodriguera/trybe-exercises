const INITIAL_STATE = {
  usersRegister: [
    {name: 'Vinicius Rodrigues', age: '21', email: 'v.rodriguesjk@gmail.com'}
  ],
};

function generalReducer(state = INITIAL_STATE, action, payload) {
  switch (action.type) {
    case 'LOGIN':
      return {};
    case 'REGISTER':
      return {
        state: [...state, payload]
      };
    default:
      return state;
  }
}

export default generalReducer;