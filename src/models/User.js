const { DataTypes, Model } = require('sequelize');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    connection,
    modelName: 'User',
  }
);

console.log(User === connection.models.User);
/*const users = connection
  .query('SELECT * FROM `users`', {
    type: QueryTypes.SELECT,
  })
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });*/

/*const users = connection
  .query('INSERT INTO `users` values (4, "test4",  123)', {
    type: QueryTypes.INSERT,
  })
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });*/

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0//P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  // Store hash in your password DB.
  console.log(hash);
});
