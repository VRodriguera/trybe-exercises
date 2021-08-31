// const express = require("express");

// const app = express();

function validateEmail(req, _res, next) {
  const { email } = req.body;
  const re = /\S+@\S+\.\S+/;
  if (!re.test(String(email).toLowerCase())) {
    return response.status(400).json({ message: 'invalid email' });
  }
  next();
}
function validateUsername(req, _res, next) {
  const { username } = req.body;
  if (username.length < 3) {
    return response.status(400).json({ message: 'invalid username' });
  }
  next();
}
function validatePassword(_req, _res, next) {
  const { password } = request.body;
  if (password.length < 4 || password.length > 8) {
    return response.status(400).json({ message: 'invalid password' });
  }
  next();
}

module.exports = {
  validateEmail,
  validateUsername,
  validatePassword
};
