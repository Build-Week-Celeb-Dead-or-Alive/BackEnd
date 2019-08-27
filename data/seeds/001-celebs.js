exports.seed = function(knex) {
  return knex('celebs').insert([{
    "name": "Laura Daugherty",
    "celebImage" : "images/Billygoathill.jpeg",
    "isDead": false,
    "dob": "1990-09-25",
  },{
    "name": "Natalie Daugherty",
    "celebImage" : "images/Billygoathill.jpeg",
    "isDead": false,
    "dob": "1990-03-30",
  }])
};
