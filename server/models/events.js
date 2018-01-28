const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  events: [
    {
      name: {
        type: String,
        required: true,
      },
      time: String,
      where: String,
      photo: String,
      paragraph: {
        type: String,
        required: true,
        minlength: 100,
      },
    },
  ],
});
const Event = mongoose.model('Event', EventSchema);

module.exports = {
  Event,
};
