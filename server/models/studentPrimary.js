const mongoose = require('mongoose');
const validator = require('validator');
// const jwt = require('jsonwebtoken');
// const _ = require('lodash');
const bcrypt = require('bcryptjs');
const {
  toJSON,
  generateAuthToken,
  findByToken,
  findByCredentials,
  removetoken,
} = require('./modelsMethods');

const StudentPrimarySchema = new mongoose.Schema({
  // primary
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    // unique: true,
  },
  rollNo: {
    type: Number,
    required: true,
    trim: true,
    minlength: 11,
    maxlength: 11,
    unique: true,
  },
  location: {
    type: String,
    // required: true,
    minlength: 10, // random number
    trim: true,
  },
  dateOfBirth: {
    type: Number,
    // match:'/(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[012])/((19|20)\\d\\d)/',
    // we can use toDate:true sanitizer
    required: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
    },
  },
  photo: {
    type: String,
    required: true,
  },
  addmittedIn: {
    type: String,
    required: true,
    // validate:{
    //   validator: validator.isAfter([,2007]),//
    //   message:"enter year after 2007",
    //  // validator:validator.isBefore([,'get presnt year'+4])  //does it look feasible
    // }
  },
  bio: {
    type: String,
    trim: true,
    // unique: true,
    minlength: 35,
  },
  authId: {
    google: {
      id: String,
      url: String,
    },
    github: {
      id: String,
      url: String,
    },
    linkedin: {
      id: String,
      url: String,
    },
  },
  // required: false,
  tokens: [
    {
      access: {
        type: String,
        required: true,
      },
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
StudentPrimarySchema.methods.toJSON = toJSON();
StudentPrimarySchema.methods.generateAuthToken = generateAuthToken();
StudentPrimarySchema.statics.findByToken = findByToken(token);
StudentPrimarySchema.statics.findByCredentials = findByCredentials(
  email,
  password
);
StudentPrimarySchema.methods.removetoken = removetoken();
StudentPrimarySchema.pre('save', function pre(next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (error, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

const StudentPrimary = mongoose.model('StudentPrimary', StudentPrimarySchema);

module.exports = {
  StudentPrimary,
};
