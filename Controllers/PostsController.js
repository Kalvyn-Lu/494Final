var express = require('express');
var router = express.Router();

var Post = require('../Models/mongo/posts.js');

// GET URL /posts/
router.get('/', function(req, res) {
    //Find All Post
    var tabsData = [
    {id: '1fcb3d5c-0db2-4d6b-95e6-1e55f22835ca', label: 'Category 1', active: true, content:"This is the content for section one"},
    {id: '2c399e0a-f7f3-4c4f-b161-cc1af88d0d68', label: 'Category 2', content:"This is the content for section two"},
    {id: 'b6ef7811-f9df-400c-8949-c882fc131175', label: 'Category HTML', content:"<p>This is the content for section three</p><p>this is a second paragraph.</p>"}
    ];
    Post.find(function(err, post) {
        res.render('posts/index', { title: 'News', message: 'Welcome to the news page.', data:post, tabsData: tabsData});
    });
});

module.exports = router;