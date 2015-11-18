var express = require('express');
var pokeapi = require('pokenode');
var router = express.Router();


router.post('/',function(req,res){
  pokeapi.pokemon(1, function(err, data) {
      if(err) {
          // handle err
      } else {
          console.log(data.abilities.length);
      }
  });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
