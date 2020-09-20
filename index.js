const Koa = require('koa');
const route = require('koa-route');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const app = new Koa();
const upload = require('./controller/upload')

const uploadRoute = route.post('/upload', upload)

app
.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://106.52.159.156')
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  await next()
})
.use(koaBody({ multipart: true }))
.use(uploadRoute)

app.listen(3000);