const mongoose = require('mongoose');
const validator = require('validator');

const EmailOtpSchema = new mongoose.Schema({
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
  otp: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 6,
  },
});

EmailOtpSchema.index({ email: 1, otp: 1 }, { expires: 60 });

const EmailOtp = mongoose.model('EmailOtp', EmailOtpSchema);

module.exports = {
  EmailOtp,
};
