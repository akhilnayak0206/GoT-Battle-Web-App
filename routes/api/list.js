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

//@route   GET /list/autocomplete
//@desc    Get filtered list.
//@access  Public
router.get('/autocomplete', async (req, res) => {
  try {
    //if query is not there then return locations
    if (!req.query.autocomplete) {
      const locations = await Battles.find().select('location');
      return res.json(locations);
    }

    //filteredLocations will give all locations that have the matching string
    const filteredLocations = await Battles.find({
      location: { $regex: req.query.autocomplete, $options: 'i' }
    }).select('location');

    // autoCompleteResults will give all locations whose query is matching with the starting index of the locations
    const autoCompleteResults = filteredLocations.filter(
      obj =>
        obj.location
          .toLowerCase()
          .indexOf(req.query.autocomplete.toLowerCase()) === 0
    );

    res.json(autoCompleteResults);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error Jaime Lannister');
  }
});

module.exports = router;
