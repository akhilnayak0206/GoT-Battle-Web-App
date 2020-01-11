const express = require('express');
const router = express.Router();

const Battles = require('../../models/Battles');

//@route   GET /search
//@desc    Get total battles that where battles have been fought.
//@access  Public
router.get('/', async (req, res) => {
  try {
    const object = req.query;

    //the array to be inserted inside $and
    let searchArray = [];

    // the object needs to be converted to array in order to work with .find()
    for (const property in object) {
      //To check if king and then "OR" attacker & defender
      if (property === 'king') {
        // temporary object
        let tempObj1 = {
          attacker_king: object[property]
        };
        // temporary object
        let tempObj2 = {
          defender_king: object[property]
        };

        //To Search either attacker or defender king
        let orSearch = { $or: [tempObj1, tempObj2] };

        searchArray.push(orSearch);
      }

      //To check if size and then "OR" attacker & defender
      else if (property === 'size') {
        // temporary object
        let tempObj1 = {
          attacker_size: object[property]
        };
        // temporary object
        let tempObj2 = {
          defender_size: object[property]
        };

        //To Search either attacker or defender size
        let orSearch = { $or: [tempObj1, tempObj2] };

        searchArray.push(orSearch);
      }

      //To check if commander and then "OR" attacker & defender
      else if (property === 'commander') {
        // temporary object
        let tempObj1 = {
          attacker_commander: object[property]
        };
        // temporary object
        let tempObj2 = {
          defender_commander: object[property]
        };

        //To Search either attacker or defender commander
        let orSearch = { $or: [tempObj1, tempObj2] };

        searchArray.push(orSearch);
      }

      //To check if type then add "battle_" before type
      else if (property === 'type') {
        // temporary object
        let tempObj = {
          battle_type: object[property]
        };

        searchArray.push(tempObj);
      }

      //To check if outcome then add "attacker_" before outcome
      else if (property === 'outcome') {
        // temporary object
        let tempObj = {
          attacker_outcome: object[property]
        };
        searchArray.push(tempObj);
      }

      //To check if death then add "major_" before death
      else if (property === 'death') {
        // temporary object
        let tempObj = {
          major_death: object[property]
        };
        searchArray.push(tempObj);
      }

      //To check if capture then add "major_" before death
      else if (property === 'capture') {
        // temporary object
        let tempObj = {
          major_capture: object[property]
        };
        searchArray.push(tempObj);
      }

      // for everything else directly add the object inside searchArray
      else {
        // temporary object
        let tempObj = {
          [property]: object[property]
        };

        searchArray.push(tempObj);
      }
    }

    // res.send(searchArray);

    const searchResults = await Battles.find({
      $and: searchArray
    });

    res.json(searchResults);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error Cersie Lannister');
  }
});

module.exports = router;
