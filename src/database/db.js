const { Sequelize } = require('sequelize');
//require('dotenv').config();

const connection = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    }
)

async () => {
    await connection
        .sync({
            logging: console.log,
            force: false,
            logging: false,
        })
}


/*connection
    .sync({
        logging: console.log,
        force: false,
        logging: false,
    })
    .then(() => {
        console.log('Connection to database established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database');
    });*/

module.exports = connection;
