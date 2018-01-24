const mongoose = require('mongoose');

const teachersNotificationSchema = new mongoose.Schema(
  {
    title: String,
    tags: [String],
    _creator: mongoose.Schema.Types.ObjectId,
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
