const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = new express.Router();

router.get('/users', async (req, res) => {

  try {
    const user = await User.findAll();

    return res.send(user)
  } catch (error) {
    console.log(error);
  }
})

router.post('/register', async (req, res) => {
  const {id, username, password_hash} = req.body;
  try {
    const user = await User.create({id, username, password_hash})

    return res.redirect('/login')

  } catch (e) {
    console.log(e);

    res.status(500).json(e)
    return res.redirect('/register')
  }
})

router.post('/login', async (req, res) => {
  const {username, password_hash} = req.body
  res.setHeader("Content-Type", "application/json");
  try {
    const user = await User.findOne({
      where: {username}
    })
    const isMatch = await bcrypt.compare(password_hash, user.password_hash)
    if (!user) {
      throw new Error('Unable to login')
    }

    if (!isMatch) {
      throw new Error('Unable to login')
    }
    return res.redirect('/home')

  } catch (error) {
    console.log(error);

  }
})


module.exports = router;
