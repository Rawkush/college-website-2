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
  eduction: [
    {
      type: String,
      required: true,
    },
  ],
  specialisations: [
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
  _creater: {
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
