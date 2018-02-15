const mongoose = require('mongoose');

const teachersNotificationSchema = new mongoose.Schema(
  {
    title: String,
    tags: {
      branch: String,
      rollNo: Number,
      year: String,
    },
    file: String,
    link: String,
    description: String,
    _creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TeacherPrimary',
    },
  },
  {
    timestamps: true,
  }
);
const teachersNotificaton = mongoose.model(
  'teachersNotificaton',
  teachersNotificationSchema
);

module.exports = {
  teachersNotificaton,
};
