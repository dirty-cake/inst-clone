import Router from 'koa-router'
import jwt from 'jsonwebtoken'

const router = new Router({ prefix: '/posts' })

router.get('/', async ctx => {
  const posts = await ctx.state.models.Post.query()
    .select('*')
  ctx.response.body = posts
})

router.post('/', async ctx => {
  const { userId } = jwt.verify(ctx.request.headers.authorization, 'piupiu')
  ctx.request.body.user_id = userId
  const post = await ctx.state.models.Post.query()
    .insert(ctx.request.body)
    .returning('*')
  ctx.response.body = post
})


export default router
