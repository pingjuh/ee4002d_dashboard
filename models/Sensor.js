const mongoose = require('mongoose');

const SensorsSchema = new mongoose.Schema({
  sensorsReading: {
    type: [Number],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Sensor = mongoose.model('sensor', SensorsSchema);