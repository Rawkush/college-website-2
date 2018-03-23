const mongoose = require('mongoose');
const _ = require('lodash');
const validator = require('validator');

function toJSON() {
  const user = this;
  const userObject = user.toObject();
  return _.pick(userObject, ['email']);
}

const EmailSchema = new mongoose.Schema({
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
});

EmailSchema.methods.toJSON = toJSON;

const Email = mongoose.model('Email', EmailSchema);

module.exports = {
  Email,
};
