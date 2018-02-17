const mongoose = require('mongoose');

const TeacherSecondrySchema = new mongoose.Schema({
  work: [
    {
      title: {
        type: String,
        required: true,
        minlength: 5,
      },
      description: {
        type: String,
        minlength: 20,
      },
    },
  ],
  education: [
    {
      type: String,
      required: true,
    },
  ],
  specialisation: [
    {
      type: String,
      trim: true,
    },
  ],
  technicalSkills: [
    {
      type: String,
      trim: true,
    },
  ],
  committee: [
    {
      name: String,
      designation: String,
      status: String,
    },
  ],
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});
const TeacherSecondry = mongoose.model(
  'TeacherSecondry',
  TeacherSecondrySchema
);

module.exports = {
  TeacherSecondry,
};
