var express = require('express');
var router = express.Router();
var Post = require('../Models/mongo/posts.js');


// define the home page route
router.get('/', function(req, res) {
    res.render('Admin/index', { layout: 'admin_layout', title: 'Admin', message: 'Welcome to the admin page.'});
});
//GET URL: /admin/post
router.get('/posts', function(req, res) {
    res.render('Admin/posts/index', { layout: 'admin_layout', title: 'Admin New Management', message: 'List, manage ad add news.'});
});
//POST URL: /admin/post
router.post('/posts', function(req, res) {
    var new_post = new Post({
        title: req.body.title,
        slug: req.body.slug,
        type: req.body.type,
        post: req.body.post
    });
    new_post.save(function(err) {
        if (err) console.log(err);
        console.log('Post saved successfully!');
    });
    res.render('Admin/posts/index', { layout: 'admin_layout', title: 'Admin'});
});







module.exports = router;



