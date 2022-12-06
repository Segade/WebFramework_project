var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');


// passport config
var Account = require('./app_server/models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// SSL
 
 var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./sslcert/key.pem', 'utf8');
var certificate = fs.readFileSync('./sslcert/cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};
const app = express();
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpServer.listen(8000);
httpsServer.listen(443);
 

//require('./app_server/models/db');
require('./app_api/models/db');
require('./app_api/models/members');
require('./app_api/models/events');
 var indexRouter = require('./app_server/routes/index');
//var usersRouter = require('./routes/users');
// const indexRouter = require('./app_server/routes/index');

const apiRoutes = require('./app_api/routes/index');
//const usersRouter = require('./app_server/routes/users');




//var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_public')));

//secret
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(flash());
app.use(passport.session());



app.use('/api', function(req, res, next) {
res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
next();
});

  app.use('/', indexRouter);
app.use('/api', apiRoutes);

//app.use('/users', usersRouter);

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
