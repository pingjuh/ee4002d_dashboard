const express = require("express");
// const config = require("config");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Sensor = require('../../models/Sensor');

// @route   POST api/sensor
// @desc    Create sensor
// @access  Public
router.post(
  "/",
  check("sensorsReading", "Sensor reading is required").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newSensor = new Sensor({
        sensorsReading: req.body.sensorsReading
      });
      const sensor = await newSensor.save();
      res.json(sensor);      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');      
    }
  }
);

// @route   GET api/sensor
// @desc    GET all sensor
// @access  Public
router.get("/", async (req, res) => {
  try {
    const sensor = await Sensor.find().sort({ inserted: -1 });
    res.json(sensor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
