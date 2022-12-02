const Koa = require('koa')
const userRouter = require('./routes/users')
const menusRouter = require('./routes/menus')

const app = new Koa()

app.use(userRouter.routes()).use(userRouter.allowedMethods())
app.use(menusRouter.routes()).use(menusRouter.allowedMethods())

app.listen(5000)