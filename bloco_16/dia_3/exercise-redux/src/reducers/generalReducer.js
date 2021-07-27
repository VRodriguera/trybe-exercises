const INITIAL_STATE = [
  {name: 'Vinicius Rodrigues', age: '21', email: 'v.rodriguesjk@gmail.com'}
];

function generalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {};
    case 'REGISTER':
      return [
        ...state,
        action.payload
      ]
    default:
      return state;
  }
}

export default generalReducer;