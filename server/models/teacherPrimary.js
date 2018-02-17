const mongoose = require('mongoose');
const validator = require('validator');
const {
  toJSON,
  generateAuthToken,
  findByToken,
  findByCredentials,
  checkPassword,
  removeToken,
  slugGen,
  findBySlug,
} = require('./modelsMethods');

const TeacherPrimarySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 1,
    },
    email: {
      type: String,
      required: 'Email is required for registration.',
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
    password: {
      type: String,
      require: true,
      minlength: 6,
    },
    dateOfBirth: {
      type: Date,
    },
    slugg: {
      type: String,
    },
    gender: {
      type: String,
      trim: true,
    },
    currentPosition: {
      type: String,
    },
    status: {
      type: Boolean,
    },
    photo: String,
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
  },
  {
    timestamps: true,
  }
);
TeacherPrimarySchema.methods.toJSON = toJSON;
TeacherPrimarySchema.methods.generateAuthToken = generateAuthToken;
TeacherPrimarySchema.methods.removeToken = removeToken;
TeacherPrimarySchema.statics.findByToken = findByToken;
TeacherPrimarySchema.statics.findByCredentials = findByCredentials;
TeacherPrimarySchema.statics.findBySlug = findBySlug;
TeacherPrimarySchema.pre('save', checkPassword);
TeacherPrimarySchema.pre('save', slugGen);

const TeacherPrimary = mongoose.model('TeacherPrimary', TeacherPrimarySchema);

module.exports = {
  TeacherPrimary,
};
