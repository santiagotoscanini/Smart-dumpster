var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
var indexRouter = require('./routes/index');

var app = express();
//conexion bd
mongoose.connect('mongodb+srv://nico:toor@sgd-ftwrh.mongodb.net/reciclaje', (err, res) => {
    if (err) {
        return console.log(`Error al conectarse a la bd: ${err}`);
    }
    console.log('Conexion a la bd establecida');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// consulta con bd,
const garbage = require('./model/garbage');
//GET array de todos los residuos
app.get('/api/residuo',(req, res) => {
  garbage.find({}, (err, residuos) => {
    if(err) return res.status(500).send({message: `error al realizar la peticion : ${err}`});
    if(!garbage) return res.status(404).send({message: `No existen productos`});
      res.send(200, {residuos})
  });
});
//get para un id especifico
app.get('/api/residuo/:residuoId',(req, res) => {

    let residuoId = req.params.residuoId;

    garbage.findById(residuoId, (err, garbage) => {
      if(err) return res.status(500).send({message: `error al realizar la peticion : ${err}`});
      if(!garbage) return res.status(404).send({message: `No existe el producto`});

      res.status(200).send({garbage});
    });
});
//POST
app.post('/api/residuo',(req, res) => {
    console.log('POST api/residuo/:nombre_residuo');
    console.log(req.body);

    let residuo = new garbage();
    residuo.nombre_residuo = req.body.nombre_residuo;
    residuo.tipo_residuo = req.body.tipo_residuo;
    residuo.descripcion = req.body.descripcion;

    residuo.save((err, residuoStored) => {
        if(err) res.status(500).send({message: `error al almacenar datos : ${err}`})
        else  res.status(200).send({residuo: residuoStored})
    });
});
//Guardar residuos
app.post('/api/residuo/:nombre_residuo', (req, res) => {

});

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
