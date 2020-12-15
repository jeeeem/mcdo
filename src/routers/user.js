const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

const router = new express.Router();

router.get('/users', auth, async (req, res) => {

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


router.post('/login',  async (req, res) => {
  const { username, password_hash } = req.body

  try {
    const user = await User.findOne({
      where: {username}
    })
    const isMatch = await bcrypt.compare(password_hash, user.password_hash)

    const token = jwt.sign({username: user.username}, process.env.JWT_SECRET, {
      expiresIn: 86400 
    });


    if (!user) {
      throw new Error('Unable to login')
    }

    if (!isMatch) {
      throw new Error('Unable to login')
    }

    return res.redirect('/home')
    //return res.json(token)

  } catch (error) {
    console.log(error);

  }
})


module.exports = router;
