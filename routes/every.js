var router = require('koa-router')();

var mock = require('../mock/front-project-data').data;
router.get('/*', async (ctx, next) =>{
  console.log('进来查找接口url---'+ ctx.request.url)
  await ctx.render('index', {
    projectList: mock.projectList
  });
});

module.exports = router;
