import Router from 'koa-router'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const router = new Router({ prefix: '/users' })

router.post('/registration', async ctx => {
  const password = ctx.request.body.password
  const hash = await bcrypt.hash(password, 13)
  ctx.request.body.password = hash
  const user = await ctx.state.models.User.query()
    .insert(ctx.request.body)
    .returning('*')
  user.token = jwt.sign({ userId: user.id }, 'piupiu')
  ctx.response.body = user
})

router.post('/login', async ctx => {
  const user = await ctx.state.models.User.query()
    .select('*')
    .where('login', ctx.request.body.login)
    .first()
  if (!user) {
    ctx.throw(401, 'Incorrect login')
  }
  const isEqualPassword = await bcrypt.compare(ctx.request.body.password, user.password)
  if (!isEqualPassword) {
    ctx.throw(401, 'Incorrect password')
  }
  user.token = jwt.sign({ userId: user.id }, 'piupiu')
  ctx.response.body = user
})

export default router
