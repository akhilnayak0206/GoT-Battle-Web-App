const express = require('express');
const router = express.Router();

const Battles = require('../../models/Battles');

//@route   GET /search
//@desc    Get total battles that where battles have been fought.
//@access  Public
router.get('/', async (req, res) => {
  try {
    // if (req.query.king) {
    //   console.log(req.query);
    // }
    const object = req.query;
    let searchArray = [];
    for (const property in object) {
      let tempObj = {
        [property]: object[property]
      };
      searchArray.push(tempObj);
    }
    res.send(searchArray);
    // const locations = await Battles.find({
    //   $and: [{ name: "Battle of Torrhen's Square" }]
    // }); //{$and:[req.query]}
    // res.json(locations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error Cersie Lannister');
  }
});

module.exports = router;
