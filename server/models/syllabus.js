const mongoose = require('mongoose');

const SyllabusSchema = new mongoose.Schema(
  {
    branch: String,
    codeNo: String,
    semester: Number,
    subject: String,
    type: String,
    l: Number,
    tp: Number,
    credits: Number,
    status: String,
    period: String,
    file: String,
  },
  {
    timestamps: true,
  }
);
const Syllabus = mongoose.model('Syllabus', SyllabusSchema);

module.exports = {
  Syllabus,
};
