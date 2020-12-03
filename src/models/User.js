const {Sequelize, DataTypes, Model} = require('sequelize');
const bcrypt = require('bcrypt');
const connection = require('../database/db');

class User extends Model {

  static associate(models) {
    //
  }

  toJSON() {
    return {...this.get(), password_hash: undefined}
  }
}

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
      type: DataTypes.STRING(100),
      allowNull: false,
    },

  },
  {
    sequelize: connection,
    modelName: 'users',
    timestamps: false,
  }
);

User.beforeCreate(async (user, options) => {
  const salt = await bcrypt.genSalt();
  user.password_hash = await bcrypt.hash(user.password_hash, salt);

});

/*const user = User.build({
  id: 3,
  username: 'test3',
  password_hash: 'test123',
});

user
  .save()
  .then(() => {
    console.log('Successfully Saved in the Database');
  })
  .catch((error) => {
    console.log(error);
  });*/

module.exports = User;
