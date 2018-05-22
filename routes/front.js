var router = require('koa-router')();
var mock = require('../mock/front-project-data').data;

router.prefix('/front');

router.get('/', function *(next) {
  yield this.render('project-front', {
    projectList: mock.projectList
  });
});

router.get('/project', function *(next) {
  yield this.render('project-front', {
    projectList: mock.projectList
  });
});

router.get('/interface', function *(next) {
  yield this.render('interface-front', {
    title: 'Hello World foo!'
  });
});

module.exports = router;