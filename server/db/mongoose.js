const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DATABASE, { useMongoClient: true })
  .then(() => console.log('succesfullly connected to the database')); // eslint-disable-line

module.exports = {
  mongoose,
};
