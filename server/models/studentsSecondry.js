const mongoose = require('mongoose');

const StudentSecondrySchema = new mongoose.Schema({
  resume: {
    type: String,
  },
  accomplistments: [
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
  specialisations: [
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
  creater: {
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
