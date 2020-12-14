const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const jwt = require('jsonwebtoken')
const userRouter = require('./routers/user');

const app = express();

// Define paths
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, './templates/views');
const layoutsPath = path.join(__dirname, './templates/layouts');
const partialsPath = path.join(__dirname, './templates/partials');

// Setup views engine 

app.engine('.hbs', hbs({
  defaultLayout: 'main',
  layoutsDir: layoutsPath,
  partialDir: partialsPath,
  extname: '.hbs'}));
app.set('views', viewsPath)
app.set('view engine', 'hbs')
app.use(express.static(publicDir));

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))

// Render Views
app.get('/', async (req, res) => {
  res.redirect('/login');
})

app.get('/login', async (req, res) => {
  res.render('login');
})

app.get('/register', async (req, res) => {
  res.render('register');
})

app.get('/home', async (req, res) => {
  res.render('home');
})

app.get('*', async (req, res) => {
  res.render('404');
})

// Routers
app.use(express.json());
app.use(userRouter);

module.exports = app;
