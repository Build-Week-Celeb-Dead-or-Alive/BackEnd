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
{
    "name": "Peter Fonda",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Peter_Fonda_2009.jpg/220px-Peter_Fonda_2009.jpg",
    "isDead": true,    
    "dob": "1940-02-23",
    "dod": "2019-08-16"
  },
  {
    "name": "Jane Fonda",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Jane_Fonda_Cannes_2015.jpg/220px-Jane_Fonda_Cannes_2015.jpg",
    "isDead": false,
    "dob": "1937-12-21",
  },
{
    "name": "Peter Sellers",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Peter_Sellers_at_home_in_Belgravia%2C_London%2C_1973.jpg/220px-Peter_Sellers_at_home_in_Belgravia%2C_London%2C_1973.jpg",
    "isDead": true,    
    "dob": "1925-09-08",
    "dod": "1980-07-24"
  },
  {
    "name": "Patrick Swayze",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Patrick_Swayze_-_1990_Grammy_Awards_%28cropped%29.jpg/220px-Patrick_Swayze_-_1990_Grammy_Awards_%28cropped%29.jpg",
    "isDead": true,
    "dob": "1952-08-18",
    "dod": "2009-09-14"
  },
{
    "name": "Richard Pryor",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/b/bb/Richard_Pryor_%281986%29_%28cropped%29.jpg",
    "isDead": true,    
    "dob": "1940-12-01",
    "dod": "2005-12-10"
  },
  {
    "name": "John Wayne",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/John_Wayne_-_still_portrait.jpg/220px-John_Wayne_-_still_portrait.jpg",
    "isDead": true,
    "dob": "1907-05-26",
    "dod": "1979-06-11"
  },
{
    "name": "Clint Eastwood",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Clint_Eastwood_J._Edgar_Premier%2C_November_2011_%28cropped%29.jpg/220px-Clint_Eastwood_J._Edgar_Premier%2C_November_2011_%28cropped%29.jpg",
    "isDead": false,    
    "dob": "1930-05-31",
  },
{
    "name": "Bea Arthur",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Beatrice_Arthur_-_1973.jpg/220px-Beatrice_Arthur_-_1973.jpg",
    "isDead": true,    
    "dob": "1922-05-13",
    "dod": "2009-04-25"
  },
  {
    "name": "Mary Tyler Moore",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mary_Tyler_Moore_rework.jpg/220px-Mary_Tyler_Moore_rework.jpg",
    "isDead": true,
    "dob": "1936-12-29",
    "dod": "2017-01-25"
  },
{
    "name": "Diana Ross",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Diana_Ross_1976.jpg/220px-Diana_Ross_1976.jpg",
    "isDead": false,    
    "dob": "1944-03-26",
  },
  {
    "name": "Charlton Heston",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/CharltonHeston1981_2_crop.jpg/220px-CharltonHeston1981_2_crop.jpg",
    "isDead": true,    
    "dob": "1923-10-04",
    "dod": "2008-04-05"
  },
  {
    "name": "Courtney Love",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Life_Ball_2014_Courtney_Love_Crop.png/220px-Life_Ball_2014_Courtney_Love_Crop.png",
    "isDead": false,    
    "dob": "1964-07-09"
  },
  {
    "name": "Sly Stone",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Sly_and_the_Family_Stone_%28cropped%29.jpg/220px-Sly_and_the_Family_Stone_%28cropped%29.jpg",
    "isDead": false,    
    "dob": "1943-05-15"
  },{
    "name": "Lucy Lawless",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Lucy_Lawless_by_Gage_Skidmore_2.jpg/220px-Lucy_Lawless_by_Gage_Skidmore_2.jpg",
    "isDead": false,    
    "dob": "1968-04-29"
  },{
    "name": "Nancy O'Dell",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Nancy_O%27Dell_on_Olive_Coco_TV.jpg/220px-Nancy_O%27Dell_on_Olive_Coco_TV.jpg",
    "isDead": false,    
    "dob": "1966-02-25"
  },{
    "name": "Britney Spears",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Britney_Spears_2013_%28Straighten_Crop%29.jpg/200px-Britney_Spears_2013_%28Straighten_Crop%29.jpg",
    "isDead": false,    
    "dob": "1981-12-02"
  },{
    "name": "Betty White",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Betty_White_2010.jpg/220px-Betty_White_2010.jpg",
    "isDead": false,    
    "dob": "1922-01-17"
  },{
    "name": "Amy Tan",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Amy_Tan.jpg/220px-Amy_Tan.jpg",
    "isDead": false,    
    "dob": "1952-02-19"
  },{
    "name": "Serena Williams",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Serena_Williams_at_2013_US_Open.jpg/220px-Serena_Williams_at_2013_US_Open.jpg",
    "isDead": false,    
    "dob": "1981-09-26"
  },{
    "name": "Venus Williams",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Venus_Williams_2012.jpg/220px-Venus_Williams_2012.jpg",
    "isDead": false,    
    "dob": "1980-06-17"
  },{
    "name": "Carmen Electra",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Carmen_Electra_2013.jpg/220px-Carmen_Electra_2013.jpg",
    "isDead": false,    
    "dob": "1972-04-20"
  },{
    "name": "Lisa Leslie",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/LisaLeslieDec10.jpg/250px-LisaLeslieDec10.jpg",
    "isDead": false,    
    "dob": "1972-07-07"
  },{
    "name": "Jennifer Garner",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Jennifer_Garner_2018_3.png/220px-Jennifer_Garner_2018_3.png",
    "isDead": false,    
    "dob": "1972-04-17"
  },{
    "name": "J. K. Rowling",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/220px-J._K._Rowling_2010.jpg",
    "isDead": false,    
    "dob": "1965-07-31"
  },{
    "name": "Ashley Olsen",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ashley_Olsen_2011_Shankbone.JPG/220px-Ashley_Olsen_2011_Shankbone.JPG",
    "isDead": false,    
    "dob": "1986-06-13"
  },{
    "name": "Mary-Kate Olsen",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Mary-Kate_Olsen_at_the_Tribeca_Film_Festival.jpg/220px-Mary-Kate_Olsen_at_the_Tribeca_Film_Festival.jpg",
    "isDead": false,    
    "dob": "1986-06-13"
  },{
    "name": "Isabel Sanford",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/The_Jeffersons_Sanford_Hemsley_Evans_1974.jpg/220px-The_Jeffersons_Sanford_Hemsley_Evans_1974.jpg",
    "isDead": true,    
    "dob": "1917-08-29",
    "dod": "2004-07-09"
  },{
    "name": "Michelle Kwan",
    "celebImage" : "",
    "isDead": false,    
    "dob": "1980-07-07"
  },{
    "name": "Susan Sarandon",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Susan_Sarandon%2C_Festival_de_Sitges_2017_%28cropped%29.jpg/220px-Susan_Sarandon%2C_Festival_de_Sitges_2017_%28cropped%29.jpg",
    "isDead": false,    
    "dob": "1946-08-04"
  },{
    "name": "Melanie Griffith",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Melanie_Griffith_2011_TIFF.jpg/170px-Melanie_Griffith_2011_TIFF.jpg",
    "isDead": false,    
    "dob": "1957-08-09"
  },{
    "name": "Terry Gross",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Terry_Gross.jpg/440px-Terry_Gross.jpg",
    "isDead": false,    
    "dob": "1951-02-14"
  },{
    "name": "Eartha Kitt",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Eartha_Kitt_2007.jpg/220px-Eartha_Kitt_2007.jpg",
    "isDead": false,    
    "dob": "1927-01-17"
  },{
    "name": "Ellen DeGeneres",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ellen_DeGeneres_2011.jpg/220px-Ellen_DeGeneres_2011.jpg",
    "isDead": false,    
    "dob": "1958-01-26"
  },{
    "name": "Danica Patrick",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Danica_Patrick_-_2017_Camping_World_500_-_Driver%27s_Parade_on_Pit_Road.jpg/220px-Danica_Patrick_-_2017_Camping_World_500_-_Driver%27s_Parade_on_Pit_Road.jpg",
    "isDead": false,    
    "dob": "1982-03-25"
  },{
    "name": "Martha Stewart",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Martha_Stewart_2011_Shankbone.JPG/220px-Martha_Stewart_2011_Shankbone.JPG",
    "isDead": false,    
    "dob": "1941-08-03"
  },{
    "name": "Amy Winehouse",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Amy_Winehouse_f4962007_crop.jpg/230px-Amy_Winehouse_f4962007_crop.jpg",
    "isDead": true,    
    "dob": "1983-09-14",
    "dod": "2011-07-23"
  },
  {
    "name": "Kurt Cobain",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Kurt_St_Thomas_1991_cropped.jpg/220px-Kurt_St_Thomas_1991_cropped.jpg",
    "isDead": true,    
    "dob": "1967-02-20",
    "dod": "1994-04-05"
  },
  {
    "name": "Audrey Hepburn",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Audrey_Hepburn_1956.jpg/220px-Audrey_Hepburn_1956.jpg",
    "isDead": true,    
    "dob": "1929-05-04",
    "dod": "1993-01-20"
  },  {
    "name": "Young M.A",
    "celebImage" : "https://pbs.twimg.com/profile_images/1149164186896936961/KPb6ti4Y_400x400.jpg",
    "isDead": false,    
    "dob": "1993-04-23"
  },  {
    "name": "The Notorious B.I.G.",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/The_Notorious_B.I.G.jpg/240px-The_Notorious_B.I.G.jpg",
    "isDead": true,    
    "dob": "1972-05-21",
    "dod": "1997-03-09"
  },  {
    "name": "Tupac Shakur",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tupac_Amaru_Shakur2.jpg/220px-Tupac_Amaru_Shakur2.jpg",
    "isDead": true,    
    "dob": "1971-06-16",
    "dod": "1996-09-13"
  },  {
    "name": "Jay-Z",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg/220px-Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg",
    "isDead": false,    
    "dob": "1969-12-04"
  },  {
    "name": "Big Daddy Kane",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Big_Daddy_Kane-03.jpg/220px-Big_Daddy_Kane-03.jpg",
    "isDead": false,    
    "dob": "1968-09-10"
  },  {
    "name": "Queen Latifah",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/QueenLatifah08TIFF.jpg/220px-QueenLatifah08TIFF.jpg",
    "isDead": false,    
    "dob": "1970-03-18"
  },  {
    "name": "Lil John",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Lil_Jon.jpg/220px-Lil_Jon.jpg",
    "isDead": false,    
    "dob": "1971-01-17"
  },  {
    "name": "Dr Dre",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dr._Dre_in_2011.jpg/200px-Dr._Dre_in_2011.jpg",
    "isDead": false,    
    "dob": "1965-02-18"
  },  {
    "name": "Beyoncé",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Beyonce_-_The_Formation_World_Tour%2C_at_Wembley_Stadium_in_London%2C_England.jpg/220px-Beyonce_-_The_Formation_World_Tour%2C_at_Wembley_Stadium_in_London%2C_England.jpg",
    "isDead": false,    
    "dob": "1981-09-04"
  },  {
    "name": "Lisa Lopes 'Left Eye'",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/LisaLopesImg.jpg/220px-LisaLopesImg.jpg",
    "isDead": true,    
    "dob": "1971-05-27",
    "dod": "2002-05-27"
  },  {
    "name": "Ms Lauryn Hill",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Lauryn_Hill_-_2014.jpg/220px-Lauryn_Hill_-_2014.jpg",
    "isDead": false,    
    "dob": "1975-05-26"
  },  {
    "name": "Alicia Keys",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Alicia_Keys_in_South_Africa_cropped.jpg/220px-Alicia_Keys_in_South_Africa_cropped.jpg",
    "isDead": true,    
    "dob": "1967-02-20",
    "dod": "1994-04-05"
  },  {
    "name": "Aaliyah",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Aaliyah-02.jpg/220px-Aaliyah-02.jpg",
    "isDead": true,    
    "dob": "1979-01-16",
    "dod": "2001-01-16"
  },{
    "name": "Johnny Cash",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/JohnnyCash1969.jpg/220px-JohnnyCash1969.jpg",
    "isDead": true,    
    "dob": "1932-02-26",
    "dod": "2003-09-12"
  },{
    "name": "June Carter Cash",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/JohnnyCashJuneCarterCash1969.jpg/220px-JohnnyCashJuneCarterCash1969.jpg",
    "isDead": true,    
    "dob": "1929-06-23",
    "dod": "2003-05-15"
  },{
    "name": "Ray Charles",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ray_Charles_classic_piano_pose.jpg/220px-Ray_Charles_classic_piano_pose.jpg",
    "isDead": true,    
    "dob": "1930-09-23",
    "dod": "2004-06-10"
  },{
    "name": "Rosemary Clooney",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Rosemary_Clooney_1954.jpg/220px-Rosemary_Clooney_1954.jpg",
    "isDead": true,    
    "dob": "1928-05-23",
    "dod": "2002-06-29"
  },{
    "name": "George Harrison",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/George_Harrison_Japan_1991.jpg/220px-George_Harrison_Japan_1991.jpg",
    "isDead": true,    
    "dob": "1943-02-25",
    "dod": "2001-11-29"
  },{
    "name": "John Lennon",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/John_Lennon_1969_%28cropped%29.jpg/220px-John_Lennon_1969_%28cropped%29.jpg",
    "isDead": true,    
    "dob": "1940-10-09",
    "dod": "1980-12-08"
  },{
    "name": "Yoko Ono",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/John_Lennon_en_zijn_echtgenote_Yoko_Ono_op_huwelijksreis_in_Amsterdam_hielden_pe%2C_Bestanddeelnr_922-2301.jpg/220px-John_Lennon_en_zijn_echtgenote_Yoko_Ono_op_huwelijksreis_in_Amsterdam_hielden_pe%2C_Bestanddeelnr_922-2301.jpg",
    "isDead": true,    
    "dob": "1967-02-20",
  },{
    "name": "Peggy Lee",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Peggy_Lee_1950.JPG/220px-Peggy_Lee_1950.JPG",
    "isDead": true,    
    "dob": "1920-05-26",
    "dod": "2002-01-21"
  },{
    "name": "Tina Turner",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Tina_Turner_50th_Anniversary_Tour.jpg/250px-Tina_Turner_50th_Anniversary_Tour.jpg",
    "isDead": false,    
    "dob": "1939-11-26"
  },{
    "name": "Luther Vandross",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Luther_Vandross_and_Diana_Ross_2000.jpg/220px-Luther_Vandross_and_Diana_Ross_2000.jpg",
    "isDead": true,    
    "dob": "1951-04-20",
    "dod": "1994-04-05"
  },{
    "name": "Queen Elizabeth II",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Queen_Elizabeth_the_Queen_Mother_portrait.jpg/220px-Queen_Elizabeth_the_Queen_Mother_portrait.jpg",
    "isDead": false,    
    "dob": "1926-04-21"
  },{
    "name": "Charles, Prince of Wales",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Charles_Prince_of_Wales.jpg/220px-Charles_Prince_of_Wales.jpg",
    "isDead": false,    
    "dob": "1948-11-04"
  },{
    "name": "Prince Philip, Duke of Edinburgh",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Duke_of_Edinburgh_33_Allan_Warren.jpg/170px-Duke_of_Edinburgh_33_Allan_Warren.jpg",
    "isDead": false,    
    "dob": "1921-06-10"
  },{
    "name": "Diana, Princess of Wales",
    "celebImage" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Diana%2C_Princess_of_Wales_1997_%282%29.jpg/220px-Diana%2C_Princess_of_Wales_1997_%282%29.jpg",
    "isDead": true,    
    "dob": "1961-07-01",
    "dod": "1997-08-31"
  },])
};
