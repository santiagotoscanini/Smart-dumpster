var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('*', function(req, res){
  res.render('index.html');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://mongodb-stitch-smartgarbagedumpster-wxlos:toor@sgd-ftwrh.mongodb.net/test?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});

module.exports = app;
