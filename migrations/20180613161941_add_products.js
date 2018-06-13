exports.up = knex => {
  return knex.schema.createTable('products', table => {
    table.increments('_id').primary()
    table.string('name')
    table.integer('qty').unsigned()
  })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('products')
}
