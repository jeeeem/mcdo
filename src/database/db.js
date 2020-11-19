const { Sequelize } = require('sequelize');

const connection = new Sequelize('mcdo', 'root', '123', {
  host: 'localhost',
  dialect: 'mysql',
});

connection
  .sync({
    logging: console.log,
    force: true,
    logging: false,
  })
  .then(() => {
    console.log('Connection to database established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database');
  });

module.exports = connection;
