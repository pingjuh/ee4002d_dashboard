const mongoose = require('mongoose');

const SensorsSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: Date.now
  },
  sensorsReading: {
    type: [Number],
    required: true
  },
  inserted: {
    type: Date,
    default: Date.now
  }
});

module.exports = Sensor = mongoose.model('sensor', SensorsSchema);