var express = require('express');
var router = express.Router();
var Residuos = require('../model/garbage');



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
    function dataset(){
        var datos = require('../public/javascripts/containerdata');
        console.log(datos);
    };
    setTimeout(dataset,100);
});

module.exports = router;
