const mongoose = require('mongoose');

const TimeTableSchema = new mongoose.Schema(
  {
    branch: String,
    semester: String,
    wef: Date,
    file: String,
  },
  {
    timestamps: true,
  }
);
const TimeTable = mongoose.model('TimeTable', TimeTableSchema);

module.exports = {
  TimeTable,
};
