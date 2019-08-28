*planned BE Endpoints:*
	Auth (unrestricted):
		POST createUser ‘https://bw-celeb-dead-app.herokuapp.com/auth/register’
      Registers new user to 'users' DB
       sample body: {
                "name" : "Laura"
                "username" : "laura"
                "password" : "password"
                "points" : 1000
       }
        returns: newly registered user object
        sample return: {
                "message": "new user laura has been saved",
                "name": "Laura",
                "username": "laura",
                "points": 1000
        }
        Does not log user in, just registers

		POST loginUser ‘https://bw-celeb-dead-app.herokuapp.com/auth/login’
      Logs in user to 'users' DB
       sample body: {
                "username" : "laura"
                "password" : "password"
       returns: logged in user information and token
       sample return: {
                "name" : "Laura"
                "points" : 1000
                token : "TOKEN"
        }



	Celebs (unrestricted):
		GET getAllCelebs -  ‘https://bw-celeb-dead-app.herokuapp.com/celebs’
      Gets all users from 'celebs' DB
        returns: array of celebs
        sample return:
          Celebs: [{
              "id": 2,
              "celebImage": null,
              "name": "Natalie Daugherty",
              "isDead": false,
              "dob": "1990-09-25T00:00:00.000Z",
              "dod": null
          }]

		GET getCelebById - ‘https://bw-celeb-dead-app.herokuapp.com/celebs/:id’
      Gets defined celeb from 'celebs' DB
        requires: "id" param
        returns: one celeb
        sample return:
          Celeb: {
              "id": 2,
              "celebImage": null,
              "name": "Natalie Daugherty",
              "isDead": false,
              "dob": "1990-09-25T00:00:00.000Z",
              "dod": null
          }

		*not finished/optional* POST createCeleb - ‘https://bw-celeb-dead-app.herokuapp.com/
    celebs’

	Users (restricted => needs token) :
		GET getAllUsers - ‘https://bw-celeb-dead-app.herokuapp.com/users’
      Gets all users from 'users' DB
        requires: token
        returns: array of all users
        sample return:
          Users: [{
              "id": 1
              "name": "Laura"
              "username": "laura"
              "points":  1000 
          }]

		GET getUserById - ‘https://bw-celeb-dead-app.herokuapp.com/users/:id’
      Gets defined user from 'users' DB
        requires: token
                  "id" param
        returns: selected user object
          sample return:
            User: {
              "name": "Laura",
              "username": "laura",
              "points":  1000 
            }

		PUT addPointsToUser - ‘https://bw-celeb-dead-app.herokuapp.com/users/:id’
      Updates defined user's points
        requires: 
            token
            "id" param
        sample body: {
            "points" : 1000
        }
        returns: user's added points
           sample return: {
             "points" : 1000
           }

		DELETE deleteUser - ‘https://bw-celeb-dead-app.herokuapp.com/users/:id’
      Deletes defined user's points
        requires: 
            token
            "id" param
        returns: message that user was deleted


SAD SEEDS

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

