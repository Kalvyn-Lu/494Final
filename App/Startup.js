var express         = require('express'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    path            = require('path'),
    layout = require('express-ejs-layouts');

module.exports = function(config) {
    var app = express();
    // view engine setup
    app.set('views', path.join(__dirname, '../Views'));
    app.set('view engine', 'ejs');
    app.use(layout);
    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    //app.use(logger('dev'));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
    app.use(cookieParser());
    //Set ../Content as the static folder
    app.use(express.static(path.join(__dirname, '../Content')));

    return app;
};