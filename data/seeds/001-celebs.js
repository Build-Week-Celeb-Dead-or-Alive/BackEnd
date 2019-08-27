exports.seed = function(knex) {
  return knex('celebs').insert([{
    "name": "Rhianna Hannah Louise",
    "celebImage" : "https://i.pinimg.com/originals/2d/1f/e6/2d1fe6cab7df9c0c023b647a99d0de66.jpg",
    "isDead": false,
    "dob": "1958-06-02",
  },{
    "name": "Michael Jackson",
    "celebImage" : "https://m.media-amazon.com/images/M/MV5BMTM1NjExNjg1OV5BMl5BanBnXkFtZTcwMTQ0NzIwMw@@._V1_UY317_CR1,0,214,317_AL_.jpg",
    "isDead": true,    
    "dob": "1958-06-02",
    "dod": "2009-06-25"
  }])
};
