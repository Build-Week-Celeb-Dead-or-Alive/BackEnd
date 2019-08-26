exports.seed = function(knex) {
  return knex('celebs').insert([{
    "name": "Laura Daugherty",
    "isDead": false,
    "dob": 1990,
  },{
    "name": "Natalie Daugherty",
    "isDead": false,
    "dob": 1991,
  }])
};
