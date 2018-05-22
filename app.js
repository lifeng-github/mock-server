const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const ejs=require('ejs')

var index = require('./routes/index');
var front = require('./routes/front');
var end = require('./routes/end');
var every = require('./routes/every');

// error handler
onerror(app);

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))


app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname+'/views', {
  map:{html:'ejs'}
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(front.routes(), front.allowedMethods());
app.use(end.routes(), end.allowedMethods());
app.use(every.routes(), every.allowedMethods());

module.exports = app;
