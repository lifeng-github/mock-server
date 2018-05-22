var router = require('koa-router')();

router.prefix('/end');
router.get('/', async (ctx, next) =>{
  await ctx.render('project-end', {
    title: 'Hello World Koa!'
  });
});

router.get('/project', async (ctx, next) =>{
  await ctx.render('project-end', {
    title: 'Hello World Koa!'
  });
});

router.get('/interface', async (ctx, next) =>{
  await ctx.render('interface-end', {
    title: 'Hello World foo!'
  });
});

module.exports = router;