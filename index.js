const Koa = require('koa');
const route = require('koa-route');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const app = new Koa();
const upload = require('./controller/upload')

const uploadRoute = route.post('/upload', upload)

app
.use(cors())
.use(koaBody({ multipart: true }))
.use(uploadRoute)

app.listen(3000);