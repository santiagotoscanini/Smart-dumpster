var express = require('express');
var router = express.Router();
var Residuos = require('../model/garbage');

var asd = require('../model/garbage');

/* GET home page. */
router.get('/', function(req, res, next) {
  Residuos.find(function (err, docs) {
    var residuosChunks =[];
    var chunckSize =3;
    for(var i=0; i< docs.length; i+= chunckSize){
        residuosChunks.push(docs.slice(i, i+chunckSize));
    }
    res.render('index', { title: 'Smart Garbage Dumpster', residuos: residuosChunks});
  });
});

module.exports = router;
