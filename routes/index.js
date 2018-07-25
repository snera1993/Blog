var express = require('express');
var router = express.Router();
var Posts = require("../db.json");
var request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'odee', 
    posts: Posts.posts
  });

});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact page' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about page' });
});

router.get('/posts', function(req, res, next) {
  res.render('posts', { title: 'POSTS' });
});

router.post('/posts', function(req, res, next) {
  // console.log(req.body);
  let obj = {
    "id": req.body.id,
    "title": req.body.title,
    "author": req.body.author,
    "date_time": req.body.date_time,
    "content": req.body.content
  }

  request.post({
    url: "http://localhost:8000/posts",
    body: obj,
    json: true
  }, function(error, response, body){
    res.redirect("/");
  });
  
  // res.render('posts', { title: 'POSTS' });
});

module.exports = router;
