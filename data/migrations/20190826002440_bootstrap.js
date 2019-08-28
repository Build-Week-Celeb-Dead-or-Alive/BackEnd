
exports.up = function(knex) {
  return knex.schema
  .createTable("celebs", celebs => {
    celebs.increments();
    celebs
      .text("name")
      .notNullable()
      .unique()
    celebs
      .text("celebImage")
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
    users.text("name")
      .notNullable()
    users
      .text("username")
      .notNullable()
      .unique();
    users.text("password")
      .notNullable()
    users.integer("points", 128)
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("users")
  return knex.schema.dropTableIfExists("celebs")
};
