const express = require('express');
const router = express.Router();

const Battles = require('../../models/Battles');

//@route   GET /count
//@desc    Get total battles that have been fought.
//@access  Public
router.get('/', async (req, res) => {
  try {
    const totalBattles = await Battles.count();
    res.json(totalBattles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error Tywin Lannister');
  }
});

module.exports = router;
