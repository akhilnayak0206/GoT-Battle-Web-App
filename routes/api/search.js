const express = require('express');
const router = express.Router();

const Battles = require('../../models/Battles');

//@route   GET /search
//@desc    Get total battles that where battles have been fought.
//@access  Public
router.get('/', async (req, res) => {
  try {
    res.send('search');
    // const totalBattles = await Battles.count();
    // res.json(totalBattles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error Jaime Lannister');
  }
});

module.exports = router;
