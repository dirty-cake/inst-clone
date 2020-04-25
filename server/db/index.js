import Objection from 'objection'
import Knex from 'knex'


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

