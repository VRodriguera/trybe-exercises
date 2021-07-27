export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';

export const login = (payload) => ({
  type: 'LOGIN',
  payload,
});

export const register = (newUser) => ({
  type: 'REGISTER',
  payload: newUser,
});