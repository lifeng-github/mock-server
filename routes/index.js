var router = require('koa-router')();

var mock = require('../mock/front-project-data').data;
router.get('/', function *(next) {
  console.log('------------wayli-----------')
  yield this.render('index', {
    projectList: mock.projectList
  });
});

module.exports = router;
