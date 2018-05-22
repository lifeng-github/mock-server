var router = require('koa-router')();
var mock = require('../mock/front-project-data').data;

router.prefix('/front');

router.get('/', async (ctx, next) =>{
  await ctx.render('project-front', {
    projectList: mock.projectList
  });
});

router.get('/project', async (ctx, next)=> {
  await ctx.render('project-front', {
    projectList: mock.projectList
  });
});

router.get('/interface', async (ctx, next)=> {
  await ctx.render('interface-front', {
    title: 'Hello World foo!'
  });
});


module.exports = router;