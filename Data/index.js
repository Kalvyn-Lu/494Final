//var Db = require('mongodb').Db;
var sqlite3 = require('sqlite3').verbose();
var mongoose = require('mongoose');
//var Sequelize = require("sequelize");


var Data = {};
module.exports = function (config) {
    Data.Connect = function(){
        Data.db = mongoose.connect(config.connections.mongo_db);
        //Data.db = new Sequelize(null, null, null, {
        //    dialect: 'sqlite',
        //    storage: config.connections.sqlite
        //});
    };
    if(!Data.db){
        Data.Connect();
    }
    return Data;
};

function generateSQLTables(){
    var SQLstatement = "CREATE TABLE posts (id INT NOT NULL AUTO_INCREMENT,slug Varchar(30),..., PRIMARY KEY (id))";

}