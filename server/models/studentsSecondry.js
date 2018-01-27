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
    },
  ],
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});
const StudentSecondry = mongoose.model(
  'StudentSecondry',
  StudentSecondrySchema
);

module.exports = {
  StudentSecondry,
};
