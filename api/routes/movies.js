var express = require('express');
var movies = require('../views/list-movies')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  movies.listMovies(req, res).end();
});

module.exports = router;
