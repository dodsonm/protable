var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),

    // ORM layer on top of MongoDB
    mongoose = require('mongoose'),

    // view engine collection
    // (note) each view engine used must still be installed via npm
    consolidate = require('consolidate'),

    // routes
    routes = require('./routes/index'),

    // database connection
    //db = mongoose.connect('mongodb://localhost/protable').connection,

    // instantiate express
    app = express();

// DEFAULT VIEW ENGINE (required)
// In this cfg, 'html' (1)links to swig & (2)becomes default extension
app.set('view engine', 'html');
app.engine('html', consolidate.swig);
// view directories
app.set('views', [
    __dirname + '/views'
]);
// view caching
app.set('view cache', false);

// MIDDLEWARE
// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTING
app.use('/', routes);
//app.use('/users', users);

// -----------------------------------------------------------------------------
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error.html', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.html', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
