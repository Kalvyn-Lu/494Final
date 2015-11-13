var express = require('express');
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');

var db = require("../Data")


module.exports = function (config, app) {
  /* Default Route */
  app.get('/', function (req, res) {
    res.render('index', { title: 'Home', message: 'Welcome'});
  });

  app.post('/', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

var fs = require('fs');
fs.writeFile("test.txt", JSON.stringify(fields), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});







        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('received the data:\n\n');
        res.end(util.inspect({
            fields: fields,
            files: files
        }));
       console.log(util.inspect({
           fields: fields,
           files: files
       }));
    });
  });

  app.use("/admin",require("./AdminController"));
  app.use("/gallery",require("./GalleryController"));
  app.use("/posts",require("./PostsController"));
};
