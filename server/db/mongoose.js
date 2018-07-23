const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DATABASE, { useMongoClient: true })
  .then(() => console.log('succesfullly connected to the database')) // eslint-disable-line
  .catch((err) => console.log('Cannon connect to database: ', err)); // eslint-disable-line

module.exports = {
  mongoose,
};
