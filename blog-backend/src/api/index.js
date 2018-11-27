const Router = require('koa-router');

const apie = new Router();
  
api.get('/text',(ctx) => {
  ctx.body = 'text성공';
});

module.export = api;