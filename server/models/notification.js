const mongoose = require('mongoose');

const notificationsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  tags: [{ type: String }],
  link: {
    type: String,
  },
});
const Notifications = mongoose.model(
  'notificatoinsSecondary',
  notificationsSchema
);

module.exports = {
  Notifications,
};
