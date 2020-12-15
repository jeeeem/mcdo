const {Sequelize, DataTypes, Model} = require('sequelize');
const connection = require('../database/db');

class Message extends Model {

  static associate(models) {
    //
  }

  //toJSON() {
    //return {...this.get(), password_hash: undefined}
  //}
}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
    },
    message: {
      type: DataTypes.STRING(255),
      //validate: {
        //isEmpty: true,
      //}
    },
    date: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.STRING(25),
    },
    landing_page: {
      type: DataTypes.STRING(25),
      },
    payload: {
      //type: DataTypes.STRING(255),
      type: DataTypes.STRING(255),
    },
  },
  {
    sequelize: connection,
    modelName: 'message',
    tableName: 'message',
    freezeTableName: true,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
  }
);


module.exports = Message;
