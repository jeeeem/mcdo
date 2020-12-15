const {Sequelize, DataTypes, Model} = require('sequelize');
const bcrypt = require('bcrypt');
const connection = require('../database/db');
const jwt = require('jsonwebtoken')

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
      unique: true,
      validate: {
        len: [6,15]
      }
    },
    password_hash: {
      type: DataTypes.STRING(100),
      validate: {
        len: [6,20],
        is: ["^[a-zA-Z0-9]+$",'i'],

      }
    },

  },
  {
    sequelize: connection,
    modelName: 'user',
    tableName: 'user',
    freezeTableName: true,
    timestamps: false
  }
);

User.beforeCreate(async (user, options) => {
  const salt = await bcrypt.genSalt();
  user.password_hash = await bcrypt.hash(user.password_hash, salt);

});

module.exports = User;
