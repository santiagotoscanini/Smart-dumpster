var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');

var mongoose = require('mongoose');
var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//conexion bd
mongoose.connect('mongodb+srv://nico:toor@sgd-ftwrh.mongodb.net/reciclaje', (err, res) => {
    if (err) {
        return console.log(`Error al conectarse a la bd: ${err}`);
    }
    //console.log('Conexion a la bd establecida');
});

const garbageCtrl = require('./controller/garbage');

//GET: Array de todos los residuos
app.get('/api/residuo', garbageCtrl.getGarbage);
//Get:  Para un id especifico
app.get('/api/residuo/:residuoId',garbageCtrl.getGarbageID);
//GET: Nombre especifico
app.get('/api/residuo/nom/:nom_residuo',garbageCtrl.getGarbageNR);
//GET: tipo de residuo especifico
app.get('/api/residuo/tipo/:tipo_residuo',garbageCtrl.getGarbageTE);
//POST: Guardar residuos
app.post('/api/residuo', garbageCtrl.saveGarbage);
//Guardar archivo con nombre de coso
app.get('/api/residuo/archivo/:nom_residuo_file', garbageCtrl.saveFilen);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
