const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const TeacherSchema = new mongoose.Schema(
  {
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
        message: '${VALUE} is not valid email.', // eslint-disable-line
      },
    },
    password: {
      type: String,
      require: true,
      minlength: 6,
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

TeacherSchema.methods.generateAuthToken = function generateAuthToken() {
  const user = this;
  const access = 'auth';
  const token = jwt
    .sign({ _id: user._id.toHexString(), access }, 'wonderifyouknow')
    .toString();
  user.tokens.push({ access, token });
  return user
    .save()
    .then(() => token)
    .catch((e) => console.log(e)); // eslint-disable-line
};

TeacherSchema.statics.findByCredentials = function findByCredentials(
  username,
  password
) {
  const User = this;
  return User.findOne({ username }).then((user) => {
    if (!user) return Promise.reject(new Error('User does not exist'));
    return new Promise((resolve, reject) => {
      if (password === user.password) {
        resolve(user);
      } else {
        reject(new Error('Password is wrong'));
      }
    });
  });
};

const Teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = {
  Teacher,
};
