const express = require('express');
const router = express.Router();

const Battles = require('../../models/Battles');

//@route   GET /list
//@desc    list all places where battles have been fought.
//@access  Public
router.get('/', async (req, res) => {
  try {
    const locations = await Battles.find().select('location');
    res.json(locations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error Jaime Lannister');
  }
});

module.exports = router;
