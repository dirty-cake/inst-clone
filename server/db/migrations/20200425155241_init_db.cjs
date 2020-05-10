exports.up = async function (knex) {
  await knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('full_name')
    table.string('login').unique().notNullable()
    table.string('password').notNullable()
    table.string('email').unique().notNullable()
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
  })
  await knex.schema.createTable('posts', table => {
    table.increments('id').primary()
    table.integer('user_id').unsigned().notNullable().references('users.id').onDelete('cascade')
    table.string('description')
    table.string('image_url').notNullable()
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('posts')
  await knex.schema.dropTable('users')
}
