var express = require('express');
var pokeapi = require('pokenode');
var async = require('async');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    if (query.id !== undefined) {
        async.parallel(
            [function (callback) {
                pokeapi.move(query.id, function (err, data) {
                    if (err) {
                        console.log(err);
                        callback(err, null);
                    }
                    else {
                        callback(null, data);
                    }
                });
            }],
            function (err, results) {
                res.render('move', {
                    title: 'Express',
                    data: results[0]
                });
            }
        );
    }
    else {
        res.render('move', {
            title: 'Express',
            data: {
                name: "Oops!",
                description: "You should only be getting to this page from another page."
            }
        });
    }
});

module.exports = router;
