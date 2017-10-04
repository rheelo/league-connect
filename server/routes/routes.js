const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

const apiKey = require("../../riot.json");
const axios = require('axios');

router.get('/:summonerId', (req, res, next) => {
  let riotURL = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.summonerId}?api_key=${apiKey.key}`
  return axios.get(riotURL).then((response) => {
    res.send(response.data);
  })
})

module.exports = router;