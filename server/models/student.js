const mongoose = require('mongoose');
const validator = require('validator');
// const jwt = require('jsonwebtoken');

const StudentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: '${VALUE} is not a valid email', // eslint-disable-line
    },
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
  rollNo: {
    type: Number,
    require: true,
    minlength: 11,
    unique: true,
  },
  address: {
    type: String,
    trim: true,
    minlength: 1,
  },
  tokens: [{
    access: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: false,
    },
  }, ],
});

module.exports = {
  StudentSchema,
};