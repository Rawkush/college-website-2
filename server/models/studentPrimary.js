const mongoose = require('mongoose');
const validator = require('validator');

const {
  toJSON,
  generateAuthToken,
  findByToken,
  decodeProviderAndId,
  findByCredentials,
  checkPassword,
  removetoken,
} = require('./modelsMethods');

const StudentPrimarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
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
    minlength: 10,
    trim: true,
  },
  dateOfBirth: {
    type: Number,
    // TODO dob either sanitized or date format is defined using validation or rEgex
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
    // TODO  it should be validate that time is after 2007
  },
  bio: {
    type: String,
    trim: true,
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
StudentPrimarySchema.methods.toJSON = toJSON;
StudentPrimarySchema.methods.generateAuthToken = generateAuthToken;
StudentPrimarySchema.statics.findByToken = findByToken;
StudentPrimarySchema.methods.decodeProviderAndId = decodeProviderAndId;
StudentPrimarySchema.statics.findByCredentials = findByCredentials;
StudentPrimarySchema.methods.removetoken = removetoken;
StudentPrimarySchema.checkPassword('save', checkPassword);
const StudentPrimary = mongoose.model('StudentPrimary', StudentPrimarySchema);

module.exports = {
  StudentPrimary,
};
