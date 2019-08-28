exports.seed = function(knex) {
  return knex('celebs').insert([{
    "name": "Rhianna",
    "celebImage" : "https://i.pinimg.com/originals/2d/1f/e6/2d1fe6cab7df9c0c023b647a99d0de66.jpg",
    "isDead": false,
    "dob": "1958-06-02",
  },{
    "name": "Tony Bennet",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Tony_Bennett.jpg/220px-Tony_Bennett.jpg",
    "isDead": false,    
    "dob": "1926-08-03",
  },{
    "name": "Larry King",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Larry_King_by_Gage_Skidmore_2.jpg/220px-Larry_King_by_Gage_Skidmore_2.jpg",
    "isDead": false,    
    "dob": "1933-11-19",
  },{
    "name": "Ringo Starr",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Ringo_Starr_and_all_his_band_%288470866906%29.jpg/220px-Ringo_Starr_and_all_his_band_%288470866906%29.jpg",
    "isDead": false,    
    "dob": "1940-07-07",
  },{
    "name": "Neil Patrick Harris",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Neil_Patrick_Harris_at_BookCon_%2816341%29_%28cropped_2%29.jpg/220px-Neil_Patrick_Harris_at_BookCon_%2816341%29_%28cropped_2%29.jpg",
    "isDead": false,    
    "dob": "1973-06-15",
  },{
    "name": "Chick Hearn",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Chick_Hearn_1963.jpg/220px-Chick_Hearn_1963.jpg",
    "isDead": true,    
    "dob": "1917-11-27",
    "dod": "2002-08-05"
  },{
    "name": "Magic Johnson",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Earvin_%22Magic%22_Johnson_on_%2707.jpg/200px-Earvin_%22Magic%22_Johnson_on_%2707.jpg",
    "isDead": false,    
    "dob": "1959-08-14",
  },{
    "name": "Sting",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sting_in_April_2018.jpg/220px-Sting_in_April_2018.jpg",
    "isDead": false,    
    "dob": "1951-10-02",
  },{
    "name": "Wade Boggs",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Boggs.JPG/220px-Boggs.JPG",
    "isDead": false,    
    "dob": "1958-06-15",
  },{
    "name": "Jose Canseco",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jose_Canseco_2009.jpg/220px-Jose_Canseco_2009.jpg",
    "isDead": false,    
    "dob": "1964-07-02",
  },{
    "name": "Roger Clemens",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/062707_267_Roger_Clemens.jpg/220px-062707_267_Roger_Clemens.jpg",
    "isDead": false,    
    "dob": "1962-08-04",
  },{
    "name": "Mike Scioscia",
    "celebImage" : "https://m.media-amazon.com/images/M/MV5BMTM1NjExNjg1OV5BMl5BanBnXkFtZTcwMTQ0NzIwMw@@._V1_UY317_CR1,0,214,317_AL_.jpg",
    "isDead": false,    
    "dob": "1958-11-27",
  },{
    "name": "Joe Frazier 'Smokin' Joe'",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Joe_Frazier_2010.jpg/220px-Joe_Frazier_2010.jpg",
    "isDead": true,    
    "dob": "1944-01-12",
    "dod": "2011-11-07",
  },{
    "name": "Bob Hope",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bob_Hope%2C_1978.jpg/220px-Bob_Hope%2C_1978.jpg",
    "isDead": true,    
    "dob": "1903-05-29",
    "dod": "2003-07-27",
  },{
    "name": "Neil Armstrong",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/220px-Neil_Armstrong_pose.jpg",
    "isDead": true,    
    "dob": "1930-08-05",
    "dod": "2012-08-25",
  },{
    "name": "Tom Jones",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Sir_Tom_Jones_at_The_Queen%27s_Birthday_Party_%28cropped-2%29.jpg/220px-Sir_Tom_Jones_at_The_Queen%27s_Birthday_Party_%28cropped-2%29.jpg",
    "isDead": false,    
    "dob": "1940-06-07",
  },{
    "name": "Adam West",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Adam_West_1989_crop_2.jpg/170px-Adam_West_1989_crop_2.jpg",
    "isDead": true,    
    "dob": "1928-09-19",
    "dod": "2017-06-09",
  },{
    "name": "Leonard Nimoy",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Leonard_Nimoy_by_Gage_Skidmore.jpg/220px-Leonard_Nimoy_by_Gage_Skidmore.jpg",
    "isDead": true,    
    "dob": "1931-03-26",
    "dod": "2015-02-27",
  },{
    "name": "Barry White",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Barry_White%2C_Bestanddeelnr_927-0099.jpg/220px-Barry_White%2C_Bestanddeelnr_927-0099.jpg",
    "isDead": true,    
    "dob": "1944-09-12",
    "dod": "2015-02-27",
  },{
    "name": "David Crosby",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/CSNY_8-1974_%282%29.jpg/170px-CSNY_8-1974_%282%29.jpg",
    "isDead": false,    
    "dob": "1941-08-14",
  },{
    "name": "Hugh Hefner",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hugh_Hefner_Glamourcon_2010.jpg/220px-Hugh_Hefner_Glamourcon_2010.jpg",
    "isDead": true,    
    "dob": "1926-04-09",    
    "dod": "2017-09-27",
  },{
    "name": "Johnny Carson",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Johnny_Carson_portrait.jpg/150px-Johnny_Carson_portrait.jpg",
    "isDead": true,    
    "dob": "1925-10-23",
    "dod": "2005-01-23",
  },{
    "name": "James Brown",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/James_Brown_Live_Hamburg_1973_1702730029.jpg/220px-James_Brown_Live_Hamburg_1973_1702730029.jpg",
    "isDead": true,    
    "dob": "1933-05-03",
    "dod": "2006-12-25",
  },{
    "name": "Conan O'Brien",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Conan_O%27Brien_by_Gage_Skidmore_2.jpg/220px-Conan_O%27Brien_by_Gage_Skidmore_2.jpg",
    "isDead": false,    
    "dob": "1963-04-18",
  },{
    "name": "James Woods",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/James_Woods_2015.jpg/220px-James_Woods_2015.jpg",
    "isDead": false,    
    "dob": "1947-04-18",
  },{
    "name": "Buzz Aldrin",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Buzz_Aldrin.jpg/220px-Buzz_Aldrin.jpg",
    "isDead": false,    
    "dob": "1930-01-20",
  },{
    "name": "James Taylor",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/James_taylor_publicity_photo.jpg/170px-James_taylor_publicity_photo.jpg",
    "isDead": false,    
    "dob": "1948-03-12",
  },{
    "name": "Dick Cavett",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/DickCavettApr10.jpg/220px-DickCavettApr10.jpg",
    "isDead": false,    
    "dob": "1936-11-19",
  },{
    "name": "Johnny Unitas",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/1967_Johnny_Unitas.jpeg/220px-1967_Johnny_Unitas.jpeg",
    "isDead": true,    
    "dob": "1933-05-07",
    "dod": "2002-09-11",
  },{
    "name": "Mel Brooks",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/MelBrooksApr10.jpg/220px-MelBrooksApr10.jpg",
    "isDead": false,    
    "dob": "1926-06-28",
  },{
    "name": "Steve Allen",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Steve_Allen_-_press_photo.JPG/220px-Steve_Allen_-_press_photo.JPG",
    "isDead": true,    
    "dob": "1921-12-26",
    "dod": "2000-10-30",
  },{
    "name": "Tito Puente",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Tito_Puentes.jpg/220px-Tito_Puentes.jpg",
    "isDead": true,    
    "dob": "1923-04-20",
    "dod": "2000-05-31",    
  },{
    "name": "Mickey Rooney",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mickey_Rooney_still.jpg/220px-Mickey_Rooney_still.jpg",
    "isDead": true,    
    "dob": "1920-09-23",
    "dod": "2014-04-06",    
  },{
    "name": "Paul McCartney",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
    "isDead": false,    
    "dob": "1942-06-18",
  },{
    "name": "Linda Ronstadt",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Zangeres_Linda_Ronstadt_op_Schiphol%2C_Bestanddeelnr_928-8975.jpg/220px-Zangeres_Linda_Ronstadt_op_Schiphol%2C_Bestanddeelnr_928-8975.jpg",
    "isDead": false,    
    "dob": "1946-07-15",
  },{
    "name": "Brooke Shields",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Brooke_Shields_2011_%28Cropped%29.jpg/220px-Brooke_Shields_2011_%28Cropped%29.jpg",
    "isDead": false,    
    "dob": "1965-05-31",
  },{
    "name": "Bette Midler",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/BetteMidler90cropped.jpg/220px-BetteMidler90cropped.jpg",
    "isDead": false,    
    "dob": "1945-12-01",
  },{
    "name": "Elizabeth Taylor",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Liztaylorinviolet.jpg/220px-Liztaylorinviolet.jpg",
    "isDead": true,    
    "dob": "1932-02-27",
    "dod": "2011-03-23",    
  },{
    "name": "Suzanne Summers",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Suzanne_Somers_USO_cropped.jpg/220px-Suzanne_Somers_USO_cropped.jpg",
    "isDead": false,    
    "dob": "1946-10-16",
  },{
    "name": "Janeane Garofalo",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Janeane_Garofalo_Jan_15%2C_2008.jpg/185px-Janeane_Garofalo_Jan_15%2C_2008.jpg",
    "isDead": false,    
    "dob": "1964-09-28",
  },{
    "name": "Kathie Lee Gifford",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Kathie_Lee_Gifford_in_2017.jpg/220px-Kathie_Lee_Gifford_in_2017.jpg",
    "isDead": false,    
    "dob": "1953-08-16",
  },{
    "name": "Cyndi Lauper",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Cyndi_Lauper_Australia_2017.png/220px-Cyndi_Lauper_Australia_2017.png",
    "isDead": false,    
    "dob": "1952-06-22",
  },{
    "name": "Dolly Parton",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Dolly_Parton_accepting_Liseberg_Applause_Award_2010_portrait.jpg/220px-Dolly_Parton_accepting_Liseberg_Applause_Award_2010_portrait.jpg",
    "isDead": false,    
    "dob": "1946-01-19",
  },{
    "name": "Jodie Foster",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Jodie_Foster_C%C3%A9sars_2011_2_%28cropped%29.jpg/220px-Jodie_Foster_C%C3%A9sars_2011_2_%28cropped%29.jpg",
    "isDead": false,
    "dob": "1962-11-19",
  },{
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
  },
])
};

