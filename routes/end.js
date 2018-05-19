var router = require('koa-router')();

router.prefix('/end');
router.get('/', function *(next) {
  yield this.render('project-end', {
    title: 'Hello World Koa!'
  });
});

router.get('/project', function *(next) {
  yield this.render('project-end', {
    title: 'Hello World Koa!'
  });
});

router.get('/interface', function *(next) {
  yield this.render('interface-end', {
    title: 'Hello World foo!'
  });
});

module.exports = router;