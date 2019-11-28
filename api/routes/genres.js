var express = require('express');
var genres = require('../views/list-genres')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  genres.listGenres(req, res).end();
});

module.exports = router;