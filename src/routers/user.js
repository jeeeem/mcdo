const express = require('express');
const User = require('../models/User');

const router = new express.Router();

const users = User.findAll();

users
  .then((user) => {
    user.forEach((data) => {
      console.log(data.dataValues);
    })
  })
  .catch((error) => {
    console.log(error);
  });
