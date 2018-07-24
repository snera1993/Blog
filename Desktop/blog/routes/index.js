var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('http://localhost:8000/posts', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all blog posts page. */
router.get('/posts', function(req, res, next) {
  res.render('posts', { newFile: 'Express' });
});

//POST NEW page
router.post('/new', function(req, res, next){

})

module.exports = router;
