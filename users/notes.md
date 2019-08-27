*planned BE Endpoints:*
	Auth (unrestricted):
		POST createUser ‘https://bw-celeb-dead-app.herokuapp.com/auth/register’
      Registers new user to 'users' DB
       sample body: {"name" : "Laura"
                "username"
                "password"
                "points"
        returns: newly registered user object
        Does not log user in, just registers

		POST loginUser ‘https://bw-celeb-dead-app.herokuapp.com/auth/login’
      Logs in user to 'users' DB
       requires:"username"
                "password"
       returns: "name"
                "points"
                token

	Celebs (unrestricted):
		GET getAllCelebs -  ‘https://bw-celeb-dead-app.herokuapp.com/celebs’
      Gets all users from 'celebs' DB
        returns: array of celebs
        Celebs: [{
            id: num
            celebImage: image
            name:string
            isDead: boolean
            dob: date
            dod: date
        }]

		GET getCelebById - ‘https://bw-celeb-dead-app.herokuapp.com/celebs/:id’
      Gets defined celeb from 'celebs' DB
        requires: "id" param
        returns: one celeb
        Celeb: {
            id: num
            celebImage: image
            name:string
            isDead: boolean
            dob: date
            dod: date
        }
		*not finished* POST createCeleb - ‘https://bw-celeb-dead-app.herokuapp.com/celebs’
	Users (restricted => needs token) :
		GET getAllUsers - ‘https://bw-celeb-dead-app.herokuapp.com/users’
      Gets all users from 'users' DB
        requires: token
        returns: array of all users
          Users: [{
                  id:  num
                  name: string
                  username: string
                  password: string
                  points:  num 
          }]
		GET getUserById - ‘https://bw-celeb-dead-app.herokuapp.com/users/:id’
      Gets defined user from 'users' DB
        requires: token
                  "id" param
        returns: selected user
          User: {
            id:  num
            name: string
            username: string
            password: string
            points:  num 
          }

		PUT addPointsToUser - ‘https://bw-celeb-dead-app.herokuapp.com/users/:id’
      Updates defined user's points
        requires: token
                  "id" param
        returns: user's added points
		DELETE deleteUser - ‘https://bw-celeb-dead-app.herokuapp.com/users/:id’
      Deletes defined user's points
        requires: token
                  "id" param
        returns: deleted user object