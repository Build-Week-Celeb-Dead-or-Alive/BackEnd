
exports.up = function(knex) {
  return knex.schema
  .createTable("celebs", celebs => {
    celebs.increments();
    celebs
      .string("name", 128)
      .notNullable()
      .unique()
    celebs
      .string("celebImage")
    celebs
      .boolean("isDead")
    celebs
      .date("dob")
      .notNullable()
    celebs
      .date("dod")
  })
   
  .createTable("users", users => {
    users.increments();
    users.string("name", 128)
      .notNullable()
    users
      .string("username", 128)
      .notNullable()
      .unique();
    users.string("password", 128)
      .notNullable()
    users.integer("points", 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users")
  return knex.schema.dropTableIfExists("celebs")
};
