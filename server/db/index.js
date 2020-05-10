import Objection from 'objection'
import Knex from 'knex'
import User from './models/User.js'
import Post from './models/Post.js'
import Comment from './models/Comment.js'

const knex = Knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'kyrylo',
    password: 'root',
    database: 'inst'
  }
})

Objection.Model.knex(knex)

export default {
  User, 
  Post,
  Comment
}