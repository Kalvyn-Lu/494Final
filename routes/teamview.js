var express = require('express');
var pokeapi = require('pokenode');
var async = require('async');
var router = express.Router();

function handleRequests (callback) {
    var id = Math.floor(Math.random() * 649);
    console.log("Requesting " + id);
    pokeapi.pokemon(id, function(err, data) {
        console.log("Found " + id);
        if (err) {
            console.log(err);
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
}

/* GET home page. */
router.get('/', function(req, res, next) {
    var mons = [];
    async.parallel([
        handleRequests, handleRequests, handleRequests, 
        handleRequests, handleRequests, handleRequests],
        function (err, results) {
            if (!err) {
                res.render('teamview', {
                    title: 'Express',
                    data: results
                });
            }
        }
    );
});

module.exports = router;
