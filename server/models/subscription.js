const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema(
  {
    endpoint: String,
    keys: {
      auth: String,
      p256dh: String,
    },
  },
  {
    timestamps: true,
  }
);

const subscription = mongoose.model('subscription', subscriptionSchema);

module.exports = { subscription };
