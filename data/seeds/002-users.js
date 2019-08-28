exports.seed = function(knex) {
  return knex('users').insert([{
    "name": "admin",
    "username": "admin",
    "password": "password",
    "points": 2
  },{
    "name": "MinniePie",
    "username": "MinniePie",
    "password": "MinniePie",
    "points": 1
  }])
};
