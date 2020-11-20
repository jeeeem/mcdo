const app = require('./app');
const port = process.env.DB_PORT;

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
