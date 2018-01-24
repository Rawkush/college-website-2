const mongoose = require('mongoose');

const notificationsSecondarySchema = new mongoose.Schema({
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
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});
const notificationsSecondry = mongoose.model(
  'notificatoinsSecondary',
  notificationsSecondarySchema
);

module.exports = {
  notificationsSecondry,
};
