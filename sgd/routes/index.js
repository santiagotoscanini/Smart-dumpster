var express = require('express');
var router = express.Router();
var Residuos = require('../model/garbage');

var asd = require('../model/garbage');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Smart Garbage Dumpster'});
});

module.exports = router;
