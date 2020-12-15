const {Sequelize} = require('sequelize');
//require('dotenv').config();

const connection = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    timezone: '+08:00',
    freezeTableName: true,
    dialect: 'mysql',
    dialectOptions: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    }
  }
)

connection
  .sync({
    logging: console.log,
    force: false,
    logging: false,
  })
  .then(() => {
    //console.log('Connection to database established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database', error);
  });

module.exports = connection;
