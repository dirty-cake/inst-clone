exports.up = async function (knex) {
  await knex.schema.createTable('likes', table => {
    table.integer('user_id').unsigned().notNullable().references('users.id').onDelete('cascade')
    table.integer('post_id').unsigned().notNullable().references('posts.id').onDelete('cascade')
    table.primary(['user_id', 'post_id'])
  })

  await knex.schema.createTable('comments', table => {
    table.increments('id').primary()
    table.integer('user_id').unsigned().notNullable().references('users.id').onDelete('cascade')
    table.integer('post_id').unsigned().notNullable().references('posts.id').onDelete('cascade')
    table.string('text')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('comments')
  await knex.schema.dropTable('likes')
}
