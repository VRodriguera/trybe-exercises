const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
// app.use(cors());
app.use(bodyParser.json());


const meals = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
  { id: 4, name: 'Pizza Calabresa', price: 15.0, waitTime: 30 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// Get Meals

app.get('/recipesMeals', function (req, res) {
  res.json(meals);
});

app.get('/recipesMeals/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredMeals = meals
    .filter((r) => r.name.includes(name) &&
    r.price >= parseInt(minPrice) ||
    r.price < parseInt(maxPrice));

  res.status(200).json(filteredMeals);
})

app.get('/recipesMeals/:id', function (req, res) {
  const { id } = req.params;
  const meal = meals.find((r) => r.id === parseInt(id));

  if (!meal) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(meal);
});

app.post('/recipesMeals', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  meals.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipesMeals/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = meals.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  meals[recipeIndex] = { ...meals[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipesMeals/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = meals.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  meals.splice(recipeIndex, 1);

  res.status(204).end();
});

// Get Drinks

app.get('/recipesDrinks', function (req, res) {
  res.json(drinks);
});

app.get('/recipesDrinks/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((r) => r.name.includes(name));

  res.status(200).json(filteredDrinks);
})

app.get('/recipesDrinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(drink);
});

app.post('/recipesDrinks', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  drinks.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!'});
});



// Token

app.get('/validateToken', function (req, res) {
  const { id, nome, preco } = req.body;
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'});
});

app.listen(3001, () => {
  console.log('Aplicação rodando na porta 3001');
});