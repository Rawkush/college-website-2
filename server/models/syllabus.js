const mongoose = require('mongoose');

const SyllabusSchema = new mongoose.Schema({
  oldSyllabus: {
    branch: String,
    semester: String,
    subjectType: String,
    l: Number,
    TP: Number,
    credits: Number,
    status: String,
  },
  newSyllabus: {
    branch: String,
    semester: String,
    subjectType: String,
    l: Number,
    TP: Number,
    credits: Number,
    status: String,
  },
});
const Syllabus = mongoose.model('Syllabus', SyllabusSchema);

module.exports = {
  Syllabus,
};
