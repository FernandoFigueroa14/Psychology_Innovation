const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookies = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const terapeutasRouter = require('./routes/terapeutas');
const userLoggedMiddleware = require('./public/js/userLoggedMiddleware');

const PORT = process.env.PORT || 8081;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());
app.use(session( {secret: "Acceso seguro Coralio", resave: false, saveUninitialized: false} ));
app.use(userLoggedMiddleware);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter);
app.use(indexRouter);
app.use(terapeutasRouter);
app.use(usersRouter);

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

app.listen(PORT, ()=>{
    console.log("Server running on port: " + PORT + " :D");
});

module.exports = app;
