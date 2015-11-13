var express = require('express');
var router = express.Router();

var Post = require('../Models/mongo/posts.js');

// GET URL /posts/
router.get('/', function(req, res) {
    //Find All Post
    var data = [
        {url: '/img/gallery/image.jpg', urlThumb: '/img/gallery/image-thumb.jpg', label: 'Picture One', caption:"This is the content for a description of a gallery image." },
        {url: '/img/gallery/image.jpg', urlThumb: '/img/gallery/image-thumb.jpg', label: 'Picture One', caption:"This is the content for a description of a gallery image." },
        {url: '/img/gallery/image.jpg', urlThumb: '/img/gallery/image-thumb.jpg', label: 'Picture One', caption:"This is the content for a description of a gallery image." },
        {url: '/img/gallery/image.jpg', urlThumb: '/img/gallery/image-thumb.jpg', label: 'Picture One', caption:"This is the content for a description of a gallery image." },
        {url: '/img/gallery/image.jpg', urlThumb: '/img/gallery/image-thumb.jpg', label: 'Picture One', caption:"This is the content for a description of a gallery image." },
        {url: '/img/gallery/image.jpg', urlThumb: '/img/gallery/image-thumb.jpg', label: 'Picture One', caption:"This is the content for a description of a gallery image." }
    ];
    Post.find(function(err, post) {
        res.render('gallery/index', { title: 'Gallery', message: 'Welcome to the gallery page.', images:data});
    });
});

module.exports = router;