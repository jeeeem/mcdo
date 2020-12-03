const express = require('express');
const hbs = require('express-handlebars');
const userRouter = require('./routers/user');
const bodyParser = require('body-parser');

const app = express();

// Define path


// Setup views engine 
app.engine('.hbs', hbs({extname: '.hbs'}));
app.set('view engine', '.hbs')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/users/login', async (req, res) => {

  res.render('login');

})

app.get('/users/register', async (req, res) => {
  res.render('register');
})

app.get('/home', async (req, res) => {
  res.render('home');
})

app.get('/404', async (req, res) => {
  res.render('404');
})

app.use(express.json());
app.use(userRouter);

module.exports = app;
