const Sequelize = require('sequelize');
const connection = require('../database/db');

//const User = connection.define('user', {
//id: {
//type: Sequelize.INTEGER,
//autoIncrement: true,
//primaryKey: true,
//},
//username: {
//type: Sequelize.STRING(25),
//allowNull: false,
//unique: true,
//},
//password_hash: {
//type: Sequelize.STRING(20),
//allowNull: false,
//},
//});
const { QueryTypes } = require('sequelize');
const users = connection
  .query('SELECT * FROM `users`', {
    type: QueryTypes.SELECT,
  })
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0//P4$$w0rD';
const someOtherPljjintextPassword = 'not_bacon';

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  // Store hash in your password DB.
  console.log(hash);
});
