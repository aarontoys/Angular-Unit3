var express = require('express');
var router = express.Router();
var db = require('../models')

router.get('/', function(req, res, next) {

  db.Artists.find(function (err, artists) {
    console.log('route',artists);

    res.render('index', { 
      title: 'Artists', 
      artists: artists
    });
  })
});

module.exports = router;