const bcryptHashLength = 60

exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.string('password', bcryptHashLength)
  })


exports.down = knex =>
  knex.schema.dropTable('users')
