// The Post modelß
var mongoose = require('mongoose')
    ,Schema = mongoose.Schema
    ,ObjectId = Schema.ObjectId;

var postSchema = new Schema({

    title: String,
    slug: String,
    type:String,
    date: {type: Date, default: Date.now},
    author: {type: String, default: 'Anon'},
    post: String
});

module.exports = mongoose.model('Post', postSchema);