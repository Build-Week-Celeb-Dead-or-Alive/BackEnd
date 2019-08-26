exports.seed = function(knex) {
  return knex('celebs').insert([{
    "name": "Laura Daugherty",
    "isDead": false,
    "dob": "1990-09-25",
  },{
    "name": "Natalie Daugherty",
    "isDead": false,
    "dob": "1990-03-30",
  }])
};
