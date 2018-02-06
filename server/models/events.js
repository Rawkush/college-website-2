const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: Date,
    place: String,
    type: String,
    photos: [{ type: String }],
    description: {
      type: String,
      required: true,
      minlength: 100,
    },
  },
  {
    timestamps: true,
  }
);
const Event = mongoose.model('Events', EventSchema);

module.exports = {
  Event,
};
