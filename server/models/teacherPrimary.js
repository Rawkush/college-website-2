const mongoose = require('mongoose');
const validator = require('validator');
const {
  toJSON,
  generateAuthToken,
  findByToken,
  findByCredentials,
  checkPassword,
  removeToken,
  slugify,
} = require('./modelsMethods');

const TeacherPrimarySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
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
    password: {
      type: String,
      require: true,
      minlength: 6,
    },
    dateOfBirth: {
      type: Date,
      validate: [
        {
          validator: (value) => {
            const a = new Date().getFullYear - 60;
            const b = new Date().getFullYear - 20;
            const maxDate = new Date();
            const minDate = new Date();
            maxDate.setFullYear(a, 0, 31);
            minDate.setFullYear(b, 0, 31);
            validator.isAfter(value[maxDate]);
            validator.isBefore(value[minDate]);
          },
          message: '{VALUE} is not a valid date',
        },
      ],
      required: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    currentPosition: {
      type: String,
      required: true,
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
  },
  {
    usePushEach: true,
  }
);
TeacherPrimarySchema.methods.toJSON = toJSON;
TeacherPrimarySchema.methods.generateAuthToken = generateAuthToken;
TeacherPrimarySchema.statics.findByToken = findByToken;
TeacherPrimarySchema.statics.findByCredentials = findByCredentials;
TeacherPrimarySchema.methods.removeToken = removeToken;
TeacherPrimarySchema.pre('save', checkPassword);
TeacherPrimarySchema.pre('save', slugify);

const TeacherPrimary = mongoose.model('Teacher', TeacherPrimarySchema);

module.exports = {
  TeacherPrimary,
};
