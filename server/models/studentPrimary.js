const mongoose = require('mongoose');
const validator = require('validator');

const {
  toJSON,
  generateAuthToken,
  findByToken,
  decodeProviderAndId,
  findByCredentials,
  checkPassword,
  removeToken,
  findByProviderAndId,
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
    validate: [
      {
        validator: (value) => validator.isEmail(value),
        message: '{VALUE} is not a valid email',
      },
    ],
  },
  photo: {
    type: String,
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
  auth: {
    provider: {
      type: String,
      required: true,
    },
    providerId: {
      type: String,
      required: true,
    },
  },
  linkedProfiles: [
    {
      provider: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      linkedId: {
        type: String,
        required: true,
      },
    },
  ],
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
StudentPrimarySchema.pre('save', checkPassword);
StudentPrimarySchema.methods.toJSON = toJSON;
StudentPrimarySchema.methods.generateAuthToken = generateAuthToken;
StudentPrimarySchema.methods.removeToken = removeToken;
StudentPrimarySchema.statics.decodeProviderAndId = decodeProviderAndId;
StudentPrimarySchema.statics.findByToken = findByToken;
StudentPrimarySchema.statics.findByCredentials = findByCredentials;
StudentPrimarySchema.statics.findByProviderAndId = findByProviderAndId;

const StudentPrimary = mongoose.model('StudentPrimary', StudentPrimarySchema);

module.exports = {
  StudentPrimary,
};
