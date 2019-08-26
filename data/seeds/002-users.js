exports.seed = function(knex) {
  return knex('users').insert([{
    "name": "Miracle",
    "username": "Miracle",
    "password": "Miracle",
    "points": 2
  },{
    "name": "MinniePie",
    "username": "MinniePie",
    "password": "MinniePie",
    "points": 1
  }])
};
