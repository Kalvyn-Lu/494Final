var express = require('express');
var router = express.Router();
var slug = require('slug');
var random = require('faker');



/* GET users listing. */
router.get('/', function (req, res, next) {
    //var data = generatedData; //See Bottom
    var data = generateBlogPosts();
    res.render('news', {title: 'News', data:data });
});

module.exports = router;

//Private Methods

function generateBlogPosts() {
    var list = [];
    var stop = 8;
    var item = {};
    for (var i = 0; i < stop; i++) {
        item = generate_news_item();
        list.push(item);
        item = generate_picture_item(i+1);
        list.push(item);
        item = generate_link_item();
        list.push(item);
    }
    return list;
}
var loremWords = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit,", "sed", "do"];
function generate_link_item() {
    var words = 144;
    var item = {};
    item.type = "link";
    item.linkUrl = random.internet.url();
    var text = "";
    for (var i = 0; i < words; i++)
        text += getRandomWord();
    item.content = text;
    item.datePublished = random.date.recent();
    return item;
}
function generate_picture_item(index) {
    var words = 10;
    var item = {};

    item.type = "picture";
    var text = "";
    for (var i = 0; i < words; i++)
        text += getRandomWord();
    item.content = text;
    item.datePublished = random.date.recent();
    var url = "/images/news/photo";
    if(index > 4)
        index -= 4;
    url += "-"+index+".jpg";
    item.imgUrl = url;
    return item;
}
function generate_news_item() {
    var words = 20;
    var item = {};
    item.type = "news";
    var text = "";
    for (var i2 = 0; i2 < words; i2++)
        text += getRandomWord();
    item.content = text;
    var heading = "";
    for (var i3 = 0; i3 < words / 5; i3++)
        heading += getRandomWord();
    item.heading = heading;

    item.url = slug(heading);
    item.author = random.name.findName();
    item.email = random.internet.email();
    item.datePublished = random.date.recent();
    return item;
}
function getRandomWord() {
    return loremWords[Math.floor((Math.random() * 10))] + " ";
}

var generatedData = [{
    "type": "news",
    "content": "elit, amet adipisicing amet sit sit dolor elit, consectetur sed amet amet lorem amet lorem elit, consectetur sed do consectetur ",
    "heading": "lorem sed ipsum elit, ",
    "url": "lorem-sed-ipsum-elit",
    "author": "Orlo Nolan",
    "email": "Heber_Bradtke@yahoo.com",
    "datePublished": "2015-10-04T11:52:03.561Z"
}, {
    "type": "picture",
    "content": "sit sit dolor dolor dolor do elit, amet dolor ipsum ",
    "datePublished": "2015-10-04T16:03:26.090Z",
    "imgUrl": "/images/news/photo-1.jpg"
}, {
    "type": "link",
    "linkUrl": "https://jeffery.name",
    "content": "adipisicing lorem dolor dolor lorem lorem elit, sed consectetur dolor adipisicing elit, do lorem elit, amet consectetur adipisicing dolor sed ipsum lorem sed consectetur sit lorem do lorem do elit, ipsum sit consectetur lorem consectetur dolor do do dolor amet lorem do sit ipsum ipsum elit, ipsum dolor sed dolor lorem dolor lorem do sit adipisicing do elit, ipsum consectetur ipsum do consectetur consectetur lorem dolor do sed sit consectetur elit, consectetur ipsum sit sed ipsum sed sed ipsum elit, lorem sed ipsum sed sit ipsum ipsum amet lorem ipsum sed lorem lorem elit, sit adipisicing elit, adipisicing amet adipisicing dolor do amet elit, ipsum do elit, lorem amet dolor ipsum consectetur do sed elit, adipisicing do consectetur consectetur sed consectetur sit do sed lorem ipsum dolor do amet lorem adipisicing sed adipisicing sed consectetur lorem sed lorem amet lorem elit, adipisicing lorem amet ",
    "datePublished": "2015-10-04T15:31:05.109Z"
}, {
    "type": "news",
    "content": "adipisicing do sit amet lorem do sit dolor do do elit, ipsum elit, lorem do sit sit lorem do ipsum ",
    "heading": "do elit, adipisicing consectetur ",
    "url": "do-elit-adipisicing-consectetur",
    "author": "Filomena Quitzon",
    "email": "Daija_Friesen52@yahoo.com",
    "datePublished": "2015-10-04T06:19:12.958Z"
}, {
    "type": "picture",
    "content": "ipsum lorem sit amet dolor sit do dolor sit do ",
    "datePublished": "2015-10-04T16:48:22.272Z",
    "imgUrl": "/images/news/photo-2.jpg"
}, {
    "type": "link",
    "linkUrl": "https://amanda.com",
    "content": "ipsum sed sit sit amet ipsum sed do dolor lorem consectetur lorem adipisicing ipsum elit, adipisicing ipsum do do consectetur do lorem sed amet ipsum elit, adipisicing dolor sed lorem sed ipsum sit lorem consectetur elit, consectetur lorem lorem consectetur ipsum ipsum amet do sed elit, sed dolor elit, adipisicing lorem amet sit lorem lorem consectetur consectetur ipsum do adipisicing lorem dolor amet ipsum consectetur dolor sed lorem lorem consectetur elit, dolor sit adipisicing amet sit do consectetur dolor sed amet elit, sed amet ipsum elit, sed sed ipsum consectetur do amet ipsum lorem ipsum amet sit lorem dolor sit lorem dolor ipsum adipisicing sit amet do do amet ipsum do elit, consectetur do consectetur ipsum lorem dolor do dolor adipisicing do do lorem elit, adipisicing consectetur do ipsum elit, consectetur dolor amet amet ipsum consectetur lorem consectetur ipsum amet do ipsum adipisicing do ",
    "datePublished": "2015-10-04T08:30:28.682Z"
}, {
    "type": "news",
    "content": "consectetur do ipsum adipisicing sed adipisicing elit, elit, consectetur lorem sit sit adipisicing lorem elit, consectetur do ipsum amet sed ",
    "heading": "amet elit, do do ",
    "url": "amet-elit-do-do",
    "author": "Wava Kuhn",
    "email": "Viviane.Krajcik@yahoo.com",
    "datePublished": "2015-10-04T14:55:17.704Z"
}, {
    "type": "picture",
    "content": "sit elit, elit, dolor sed lorem consectetur dolor lorem consectetur ",
    "datePublished": "2015-10-04T05:06:48.640Z",
    "imgUrl": "/images/news/photo-3.jpg"
}, {
    "type": "link",
    "linkUrl": "https://dejon.net",
    "content": "amet amet adipisicing lorem do lorem ipsum lorem adipisicing consectetur dolor consectetur amet elit, sit consectetur sed do elit, do lorem sed elit, do amet amet sit adipisicing lorem dolor sed dolor dolor consectetur sit do sed elit, elit, sit adipisicing lorem adipisicing sit ipsum amet do ipsum sit dolor sit amet sit sed sit dolor ipsum lorem ipsum sed lorem sed do sit sed ipsum adipisicing amet elit, sit consectetur adipisicing dolor adipisicing dolor sit sed do dolor elit, sit sed lorem do consectetur sed sit sed amet do elit, dolor adipisicing sit ipsum sed sed sit amet dolor ipsum elit, ipsum do sit ipsum do do amet adipisicing ipsum amet adipisicing sed consectetur dolor adipisicing amet sit elit, sit amet elit, ipsum adipisicing do amet consectetur dolor sed ipsum sed ipsum do sit adipisicing dolor ipsum lorem adipisicing ipsum adipisicing adipisicing dolor ",
    "datePublished": "2015-10-04T14:04:41.948Z"
}, {
    "type": "news",
    "content": "elit, consectetur consectetur ipsum sit consectetur do do lorem ipsum do adipisicing sit ipsum consectetur lorem dolor consectetur adipisicing dolor ",
    "heading": "ipsum sit do sed ",
    "url": "ipsum-sit-do-sed",
    "author": "Ayla Wiegand",
    "email": "Lavada.Goldner@yahoo.com",
    "datePublished": "2015-10-05T01:18:16.953Z"
}, {
    "type": "picture",
    "content": "amet consectetur consectetur elit, lorem ipsum sit ipsum lorem amet ",
    "datePublished": "2015-10-04T04:03:53.707Z",
    "imgUrl": "/images/news/photo-4.jpg"
}, {
    "type": "link",
    "linkUrl": "http://buck.info",
    "content": "elit, lorem amet elit, consectetur sit sit ipsum sed lorem lorem sed adipisicing consectetur sit amet do sed amet dolor elit, dolor dolor ipsum do elit, adipisicing ipsum lorem sit do consectetur adipisicing do sed adipisicing sit elit, amet dolor elit, dolor elit, sed dolor adipisicing lorem consectetur dolor ipsum amet elit, consectetur adipisicing dolor dolor dolor amet ipsum ipsum elit, ipsum sit dolor elit, ipsum do adipisicing adipisicing amet sed sit lorem lorem elit, sed do lorem sit amet dolor lorem sit sed adipisicing lorem amet ipsum consectetur consectetur amet sit do dolor sit do sed ipsum amet do elit, ipsum amet adipisicing adipisicing elit, consectetur amet dolor sit sed lorem do ipsum consectetur lorem sed sed elit, elit, amet adipisicing ipsum consectetur consectetur dolor consectetur dolor do amet ipsum ipsum consectetur ipsum adipisicing sed consectetur elit, lorem adipisicing elit, consectetur ipsum sit ",
    "datePublished": "2015-10-04T21:18:26.948Z"
}, {
    "type": "news",
    "content": "consectetur consectetur consectetur do elit, adipisicing elit, ipsum sit do do ipsum lorem sed adipisicing amet adipisicing lorem ipsum adipisicing ",
    "heading": "amet consectetur sed consectetur ",
    "url": "amet-consectetur-sed-consectetur",
    "author": "Kali Ondricka",
    "email": "Lawrence58@yahoo.com",
    "datePublished": "2015-10-04T08:35:58.662Z"
}, {
    "type": "picture",
    "content": "amet do ipsum sed do ipsum do consectetur sit sed ",
    "datePublished": "2015-10-04T09:25:15.026Z",
    "imgUrl": "/images/news/photo-1.jpg"
}, {
    "type": "link",
    "linkUrl": "https://natalie.org",
    "content": "dolor amet sed sed dolor elit, dolor sed dolor ipsum dolor sit dolor amet elit, lorem dolor do adipisicing adipisicing sed amet ipsum do elit, amet sit do sit do amet elit, amet adipisicing consectetur consectetur adipisicing ipsum amet do lorem consectetur elit, amet adipisicing amet consectetur sit ipsum adipisicing ipsum ipsum elit, consectetur dolor sit elit, elit, consectetur sed dolor dolor elit, elit, do ipsum do elit, adipisicing elit, lorem do consectetur dolor lorem lorem consectetur lorem amet sit sit do consectetur adipisicing dolor sit amet amet dolor ipsum sed do elit, adipisicing lorem lorem do lorem lorem adipisicing ipsum sed do amet ipsum lorem amet adipisicing consectetur do sed sit elit, sit sit adipisicing adipisicing consectetur adipisicing dolor consectetur sed dolor elit, adipisicing amet do do elit, ipsum consectetur adipisicing sed sed consectetur sit dolor dolor sed adipisicing lorem dolor sit elit, ",
    "datePublished": "2015-10-04T07:41:01.871Z"
}, {
    "type": "news",
    "content": "sit lorem amet sit adipisicing ipsum elit, sed amet dolor amet ipsum lorem elit, do sit adipisicing sit sit sed ",
    "heading": "ipsum ipsum lorem amet ",
    "url": "ipsum-ipsum-lorem-amet",
    "author": "Francesca Gutkowski",
    "email": "Lucio87@gmail.com",
    "datePublished": "2015-10-04T08:16:59.512Z"
}, {
    "type": "picture",
    "content": "adipisicing adipisicing lorem sed sit ipsum consectetur sit lorem do ",
    "datePublished": "2015-10-04T21:31:27.127Z",
    "imgUrl": "/images/news/photo-2.jpg"
}, {
    "type": "link",
    "linkUrl": "https://audra.com",
    "content": "dolor sit adipisicing amet elit, adipisicing consectetur ipsum sit dolor sed ipsum do elit, sit amet do do do amet elit, sed sit ipsum ipsum elit, amet lorem elit, sed sed dolor elit, adipisicing sit ipsum sed sed lorem amet sed do adipisicing adipisicing dolor ipsum amet lorem lorem do elit, elit, consectetur adipisicing ipsum sit lorem do lorem lorem sed ipsum lorem sit sit elit, lorem amet sed lorem sed ipsum sed amet ipsum adipisicing dolor lorem amet sed elit, amet lorem sed lorem elit, ipsum amet adipisicing adipisicing adipisicing ipsum do elit, do amet do sed sed dolor dolor do lorem ipsum sed sed amet adipisicing elit, lorem sit dolor consectetur adipisicing amet sit amet dolor elit, sit sed sit adipisicing lorem lorem adipisicing ipsum consectetur amet do lorem sed amet sit do adipisicing elit, dolor sit consectetur amet amet do consectetur ",
    "datePublished": "2015-10-04T17:45:27.012Z"
}, {
    "type": "news",
    "content": "elit, dolor sed amet ipsum lorem ipsum amet adipisicing consectetur sit consectetur adipisicing dolor amet lorem lorem consectetur elit, ipsum ",
    "heading": "lorem elit, lorem lorem ",
    "url": "lorem-elit-lorem-lorem",
    "author": "Mario Senger",
    "email": "Mikayla.Rau33@gmail.com",
    "datePublished": "2015-10-04T18:14:08.873Z"
}, {
    "type": "picture",
    "content": "consectetur dolor lorem adipisicing adipisicing amet consectetur amet amet dolor ",
    "datePublished": "2015-10-04T18:24:42.034Z",
    "imgUrl": "/images/news/photo-3.jpg"
}, {
    "type": "link",
    "linkUrl": "https://scottie.org",
    "content": "sed lorem sed dolor amet adipisicing do elit, adipisicing lorem sed lorem amet elit, elit, amet amet do sit sit adipisicing amet adipisicing lorem ipsum adipisicing do amet elit, consectetur adipisicing dolor consectetur sed sit ipsum dolor sit ipsum dolor lorem adipisicing do elit, elit, amet adipisicing sed ipsum ipsum ipsum dolor sed sit consectetur consectetur do lorem elit, ipsum sit consectetur sed do consectetur sed dolor adipisicing lorem adipisicing amet sit consectetur do adipisicing adipisicing consectetur sed adipisicing sed sed ipsum consectetur ipsum adipisicing elit, do dolor lorem consectetur sed sed adipisicing amet adipisicing elit, sed sed amet amet elit, dolor lorem consectetur do do ipsum elit, dolor dolor amet ipsum sit amet sed sed lorem adipisicing do amet amet sit lorem ipsum amet consectetur sit sit elit, sit sit lorem sed elit, ipsum adipisicing do do lorem do adipisicing elit, elit, sit ",
    "datePublished": "2015-10-04T17:15:57.998Z"
}, {
    "type": "news",
    "content": "adipisicing sit lorem elit, consectetur amet lorem do adipisicing elit, elit, ipsum sed amet amet do sed consectetur lorem amet ",
    "heading": "consectetur ipsum adipisicing amet ",
    "url": "consectetur-ipsum-adipisicing-amet",
    "author": "Mark Koepp",
    "email": "Eino.Aufderhar@yahoo.com",
    "datePublished": "2015-10-04T22:31:24.261Z"
}, {
    "type": "picture",
    "content": "ipsum adipisicing adipisicing dolor sed sit amet lorem elit, consectetur ",
    "datePublished": "2015-10-04T17:30:08.235Z",
    "imgUrl": "/images/news/photo-4.jpg"
}, {
    "type": "link",
    "linkUrl": "https://tara.com",
    "content": "ipsum amet adipisicing adipisicing ipsum ipsum do consectetur ipsum consectetur sed elit, dolor elit, lorem do do elit, amet adipisicing adipisicing lorem consectetur consectetur sed lorem consectetur consectetur adipisicing sed sit ipsum do sed ipsum adipisicing do amet elit, amet consectetur amet lorem consectetur amet consectetur adipisicing sit do dolor elit, do consectetur dolor sit sed sit lorem adipisicing amet lorem sed lorem sed consectetur consectetur sed consectetur lorem lorem amet consectetur lorem consectetur sed lorem amet dolor dolor sed dolor ipsum sit consectetur do sed sit lorem ipsum sit dolor amet consectetur do lorem ipsum consectetur elit, dolor adipisicing adipisicing consectetur ipsum sit dolor lorem do elit, sit dolor elit, adipisicing sit elit, adipisicing ipsum adipisicing amet dolor lorem sed ipsum consectetur ipsum do adipisicing adipisicing lorem elit, ipsum ipsum amet consectetur sit sed do adipisicing amet sed dolor lorem sed lorem dolor ",
    "datePublished": "2015-10-04T20:22:14.644Z"
}];
