const mongoose = require('mongoose');

const TimeTableSchema = new mongoose.Schema(
  {
    branch: String,
    semester: String,
    wef: Date,
    title: String,
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const TimeTable = mongoose.model('TimeTable', TimeTableSchema);

module.exports = {
  TimeTable,
};
