const mongoose = require('mongoose');
const validator = require('validator');

const {
  toJSON,
  generateAuthToken,
  findByToken,
  decodeProviderAndId,
  findByCredentials,
  removeToken,
  findByProviderAndId,
  slugGen,
  findBySlug,
  findAllIdByTags,
} = require('./modelsMethods');

const StudentPrimarySchema = new mongoose.Schema(
  {
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
      type: Date,
      validate: [
        {
          validator: (value) => {
            // const dateFormat = /^[0-9]{2}/[0-9]{2}/[0-9]{4}$/;
            // if (val.value.match(dateFormat)) {
            //   const date = new date(val);
            //   const d = new Date().getFullYear() - 25; // presnt year
            //   const a = new Date().getFullYear() - 16; // present year -4
            //   if (d <= date.getFullYear() && date.getFullYear() <= a) {
            //     return true;
            //   }
            //   return false;
            // }
            // return false;
            // const a = new Date().getFullYear - 23;
            // const b = new Date().getFullYear - 16;
            // const maxDate = new Date();
            // const minDate = new Date();
            // maxDate.setFullYear(a, 0, 31);
            // minDate.setFullYear(b, 0, 31);
            // validator.isAfter(value[maxDate]);
            // validator.isBefore(value[minDate]);
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
    branch: {
      type: String,
      required: true,
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
    admittedIn: {
      type: Date,
      required: true,
      validate: [
        {
          validator: (value) => {
            // const a = new Date().getFullYear - 4;
            // const date = new Date();
            // date.setFullYear(a, 7, 10);
            // validator.isAfter(value[date]);
          },
          message: '{VALUE} is not a valid admitted date',
        },
      ],
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
      },
    ],
    slugg: {
      type: String,
      lowercase: true,
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

StudentPrimarySchema.index({ name: 'text' });

StudentPrimarySchema.methods.toJSON = toJSON;
StudentPrimarySchema.methods.generateAuthToken = generateAuthToken;
StudentPrimarySchema.methods.removeToken = removeToken;
StudentPrimarySchema.statics.decodeProviderAndId = decodeProviderAndId;
StudentPrimarySchema.statics.findByToken = findByToken;
StudentPrimarySchema.statics.findByCredentials = findByCredentials;
StudentPrimarySchema.statics.findByProviderAndId = findByProviderAndId;
StudentPrimarySchema.statics.findBySlug = findBySlug;
StudentPrimarySchema.statics.findAllIdByTags = findAllIdByTags;
StudentPrimarySchema.pre('save', slugGen);

const StudentPrimary = mongoose.model('StudentPrimary', StudentPrimarySchema);

module.exports = {
  StudentPrimary,
};
