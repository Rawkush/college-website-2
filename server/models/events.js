const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: Date,
    place: String,
    mainPhoto: String,
    photo1: String,
    photo2: String,
    photo3: String,
    photo4: String,
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
