const mongoose = require('mongoose');

const questionBankSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    year: {
      type: Date,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    file: String,
  },
  {
    timestamps: true,
  }
);

const questionBank = mongoose.model('questionBank', questionBankSchema);

module.exports = { questionBank };
