var express = require('express');
var router = express.Router();

/* html */
exports.index = function(req, res){
  res.render('index', { title: 'Page title' });};


module.exports = router;
