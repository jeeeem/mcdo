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

router.post('/users/register', async (req, res) => {
  const {id, username, password_hash} = req.body;
  try {
    const user = await User.create({id, username, password_hash})

    return res.redirect('/users/login')
    //return res.json(user);

  } catch (e) {
    console.log(e);

    res.status(500).json(e)
    return res.redirect('/users/register')
  }
})

router.post('/users/login', async (req, res) => {
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
    //return res.send(user)
  } catch (error) {
    console.log(error);

    return res.redirect('/404')
    //return res.status(404).json({error: 'Login Unsuccessfully'})
  }
})

module.exports = router;
