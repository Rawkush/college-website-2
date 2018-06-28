const mongoose = require('mongoose');

if (process.env.NODE_ENV === 'test') {
  //  eslint-disable-next-line
  require('dotenv').config({ path: '.env.test' });
} else {
  //  eslint-disable-next-line
  require('dotenv').config({ path: '.env' });
}

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DATABASE, { useMongoClient: true })
  .then(() => {
    if (process.env.NODE_ENV !== 'test') {
      // eslint-disable-next-line
      console.log('Successfully connected to the database');
    }
  }) // eslint-disable-next-line
  .catch((err) => console.log('Cannon connect to database: ', err));

module.exports = {
  mongoose,
};
