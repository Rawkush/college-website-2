const mongoose = require('mongoose');

const SyllabusSchema = new mongoose.Schema(
  {
    branch: String,
    semester: String,
    subjectType: String,
    l: Number,
    TP: Number,
    credits: Number,
    status: String,
    period: String,
  },
  {
    timestamps: true,
  }
);
const Syllabus = mongoose.model('Syllabus', SyllabusSchema);

module.exports = {
  Syllabus,
};
