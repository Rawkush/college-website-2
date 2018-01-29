const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: Date,
  place: String,
  photo: String,
  description: {
    type: String,
    required: true,
    minlength: 100,
  },
});
const Event = mongoose.model('Event', EventSchema);

module.exports = {
  Event,
};
