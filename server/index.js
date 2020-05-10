import Koa from 'koa'
import models from './db/index.js'
import body from 'koa-body'
import users from './api/users.js'
import posts from './api/posts.js'

const app = new Koa()

app.use(body())

app.use(async (ctx, next) => {
  ctx.state.models = models
  await next()
})

app.use(users.routes())
app.use(posts.routes())

app.listen(3000, () => console.log('Server successfully started'))