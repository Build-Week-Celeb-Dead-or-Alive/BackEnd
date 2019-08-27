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