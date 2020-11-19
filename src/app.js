const express = require('express');
require('./database/db');
require('./models/User');

const app = express();

app.use(express.json());

module.exports = app;
