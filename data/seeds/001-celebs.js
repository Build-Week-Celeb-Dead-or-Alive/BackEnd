exports.seed = function(knex) {
  return knex('celebs').insert([
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
  },])
};
