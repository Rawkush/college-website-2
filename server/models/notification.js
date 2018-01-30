const mongoose = require('mongoose');

const notificationsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    file: String,
    tags: [{ type: String }],
    link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Notifications = mongoose.model('Notifications', notificationsSchema);

module.exports = {
  Notifications,
};
