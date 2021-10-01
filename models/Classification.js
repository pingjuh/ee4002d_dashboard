const mongoose = require('mongoose');

const ClassificationSchema = new mongoose.Schema({
  classification: {
    type: Number,
    required: true
  },
  inserted: {
    type: Date,
    default: Date.now
  }
});

module.exports = Classification = mongoose.model('cachedclassification', ClassificationSchema);