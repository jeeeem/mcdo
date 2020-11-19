const express = require('express');
require('./database/db');

const app = express();

app.use(express.json());

module.exports = app;
