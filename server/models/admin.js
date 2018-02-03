const mongoose = require('mongoose');
const validator = require('validator');
const {
  toJSON,
  generateAuthToken,
  findByToken,
  checkPasswordStonger,
  removeToken,
  findAdmin,
} = require('./modelsMethods');

const AdminSchema = new mongoose.Schema(
  {
    username: {
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
AdminSchema.methods.toJSON = toJSON;
AdminSchema.methods.generateAuthToken = generateAuthToken;
AdminSchema.methods.removeToken = removeToken;
AdminSchema.statics.findByToken = findByToken;
AdminSchema.statics.findAdmin = findAdmin;
AdminSchema.pre('save', checkPasswordStonger);

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = {
  Admin,
};
