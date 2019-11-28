var express = require('express');
var http = require('http');

const listMovies = (req, res) => {
  let body = '';
  const httpreq = http.get(`http://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIES_API_KEY}&page=${req.query.page}`, (data) => {
    data.on('data', (chunk) => {
      body += chunk;
    });
    data.on('end', () => {
      res.json(JSON.parse(body));
    });
  });

  httpreq.on('error', (e) => {
    console.log(e);
  });

  return httpreq;
};

module.exports = {
  listMovies
};