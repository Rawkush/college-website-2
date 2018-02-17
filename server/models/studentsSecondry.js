const mongoose = require('mongoose');

const StudentSecondrySchema = new mongoose.Schema({
  resume: {
    type: String,
  },
  accomplishments: [
    {
      title: {
        type: String,
        trim: true,
        require: true,
        minlength: 10,
      },
      description: {
        type: String,
        trim: true,
        minlength: 25,
      },
      photo: {
        type: String,
      },
    },
  ],
  specialisation: [
    {
      type: String,
      trim: true,
    },
  ],
  projects: [
    {
      title: {
        type: String,
        trim: true,
        require: true,
        minlength: 5,
      },
      description: {
        type: String,
        required: true,
        trim: true,
        minlength: 50,
      },
      photos: [{ type: String }],
      link: String,
    },
  ],
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentPrimary',
    required: true,
  },
  notifications: [
    {
      _ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachersNotificaton',
      },
      read: {
        type: Boolean,
        default: false,
      },
    },
  ],
});
const StudentSecondry = mongoose.model(
  'StudentSecondary',
  StudentSecondrySchema
);

module.exports = {
  StudentSecondry,
};
