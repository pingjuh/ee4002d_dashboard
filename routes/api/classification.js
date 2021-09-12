const express = require("express");
const config = require("config");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Classification = require('../../models/Classification');


// @route   POST api/classification
// @desc    Create classification
// @access  Public
router.post(
  "/",
  check("classification", "Classification is required").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newClassification = new Classification({
        classification: req.body.classification
      });
      const classification = await newClassification.save();
      res.json(classification);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


// @route   GET api/classification
// @desc    GET all classification
// @access  Public
router.get("/", async (req, res) => {
  try {
    const classification = await Classification.find().sort({ date: -1 });
    console.log(classification)
    res.json(classification);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
