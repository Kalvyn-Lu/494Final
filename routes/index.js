var express = require('express');
var pokeapi = require('pokenode');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PokeTeam' });
});

module.exports = router;
