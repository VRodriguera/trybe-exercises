const express = require("express");

const app = express();

app.use(express.json());

const crypto = require('crypto');
function generateToken() {
  return crypto.randomBytes(6).toString('hex');
}

const {
  validateEmail,
  validateUsername,
  validatePassword
} = require('./validations/validations');

const validations = [validateEmail, validateUsername, validatePassword]

app.get("/", (req, res) => {
  return res.json({"message": "Hello Word"});
})

app.post("/user/register", validations, (req, res) => {
  const { username } = req.body;
  return res.status(201).json({ "message": `${username} created` })
});

app.post("/user/login", validateEmail, validatePassword, (_req, res) => {
  const token = generateToken();
  return res.status(200).json({ token })
});

app.listen(3001, () => {
  console.log("Ta rodando na porta 3001");
});
