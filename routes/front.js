var router = require('koa-router')();

router.prefix('/front');

router.get('/', function *(next) {
  yield this.render('project-front', {
    title: 'Hello World Koa!'
  });
});

router.get('/project', function *(next) {
  yield this.render('project-front', {
    title: 'Hello World Koa!'
  });
});

router.get('/interface', function *(next) {
  yield this.render('interface-front', {
    title: 'Hello World foo!'
  });
});

module.exports = router;