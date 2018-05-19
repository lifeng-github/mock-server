var app = require('koa')()
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , onerror = require('koa-onerror'),
  ejs=require('ejs');

var index = require('./routes/index');
var front = require('./routes/front');
var end = require('./routes/end');

// error handler
onerror(app);

// global middlewares
app.use(views('views', {
  map:{html:'ejs'}
}));
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(front.routes(), front.allowedMethods());
app.use(end.routes(), end.allowedMethods());

module.exports = app;
