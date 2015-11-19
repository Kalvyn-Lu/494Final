var express = require('express');
var pokeapi = require('pokenode');
var router = express.Router();

var poster = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {};
  data.name = "Bulber";
  data.image = "http://pokeapi.co/media/img/1.png"
  data.description="Bulbaaaaaaaaaaaaaaaaaaaaaaaaaa saur"
  res.render('pokemon', { title: 'Pokemon wiki', data: data});
});
module.exports = router;
