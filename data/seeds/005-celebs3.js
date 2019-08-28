exports.seed = function(knex) {
  return knex('celebs').insert([{
  "name": "Kelsey Grammer",
  "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Kelsey_Grammer_2010_%28cropped%29.jpg/220px-Kelsey_Grammer_2010_%28cropped%29.jpg",
  "isDead": false,    
  "dob": "1955-02-21",
},
{
  "name": "Joe Montana",
  "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Joe_Montana_ESPN_cropped2.jpg/220px-Joe_Montana_ESPN_cropped2.jpg",
  "isDead": false,
  "dob": "1956-06-11",
},{
  "name": "Drew Carey",
  "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Drew_Carey_2014.jpg/220px-Drew_Carey_2014.jpg",
  "isDead": false,    
  "dob": "1958-05-23",
},
{
  "name": "Dan Rather",
  "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Dan_Rather_Peabody.jpg/220px-Dan_Rather_Peabody.jpg",
  "isDead": false,
  "dob": "1931-10-31",
},
{
  "name": "Vincent Price",
  "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Vincent_Price_in_House_on_Haunted_Hill_%28cropped%29.jpg/220px-Vincent_Price_in_House_on_Haunted_Hill_%28cropped%29.jpg",
  "isDead": true,    
  "dob": "1911-05-27",
  "dod": "1993-10-25"
},
{
  "name": "Christopher Lee",
  "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Christopher_Lee_at_the_Berlin_International_Film_Festival_2013.jpg/220px-Christopher_Lee_at_the_Berlin_International_Film_Festival_2013.jpg",
  "isDead": true,
  "dob": "1922-05-27",
  "dod": "2015-06-07"
},
{
  "name": "Dennis Hopper",
  "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dennis_Hopper_Cannes_2008.jpg/220px-Dennis_Hopper_Cannes_2008.jpg",
  "isDead": true,    
  "dob": "1936-05-17",
  "dod": "2010-05-29"
},
{
  "name": "Woody Allen",
  "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Woody_Allen_Cannes_2016.jpg/220px-Woody_Allen_Cannes_2016.jpg",
  "isDead": false,
  "dob": "1935-12-01",
},
{
  "name": "Bill Wyman",
  "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bill_Wyman_2009.jpg/220px-Bill_Wyman_2009.jpg",
  "isDead": false,    
  "dob": "1936-10-24",
},
{
  "name": "David Bowie",
  "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/David-Bowie_Chicago_2002-08-08_photoby_Adam-Bielawski-cropped.jpg/220px-David-Bowie_Chicago_2002-08-08_photoby_Adam-Bielawski-cropped.jpg",
  "isDead": true,
  "dob": "1947-01-08",
  "dod": "2016-01-10"
},{
  "name": "Yoko Ono",
  "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/John_Lennon_en_zijn_echtgenote_Yoko_Ono_op_huwelijksreis_in_Amsterdam_hielden_pe%2C_Bestanddeelnr_922-2301.jpg/220px-John_Lennon_en_zijn_echtgenote_Yoko_Ono_op_huwelijksreis_in_Amsterdam_hielden_pe%2C_Bestanddeelnr_922-2301.jpg",
  "isDead": true,    
  "dob": "1967-02-20",
},])
};

