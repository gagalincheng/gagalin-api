const Koa = require('koa');
const route = require('koa-route');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const app = new Koa();
const upload = require('./controller/upload')

const uploadRoute = route.post('/upload', upload)

app
.use(cors({
  origin: function(ctx) { //设置允许来自指定域名请求
    return 'http://106.52.159.156'; 
  },
  maxAge: 5, //指定本次预检请求的有效期，单位为秒。
  credentials: true, //是否允许发送Cookie
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))
.use(koaBody({ multipart: true }))
.use(uploadRoute)

app.listen(3000);