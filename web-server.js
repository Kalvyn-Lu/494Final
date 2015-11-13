var http            = require("http");
var appConfig    = require('./config.json');

var app = require("./App")(appConfig);
var Database = require("./Data")(appConfig);
var Controllers = require("./Controllers")(appConfig, app);

//Configure Errors: Must happen after all routes are defined.
require("./App/Error")(app, appConfig);

module.exports = app;
