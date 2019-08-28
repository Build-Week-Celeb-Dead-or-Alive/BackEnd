# Celebrity Dead or Alive App API

**The Celebrity Dead or Alive App creates a fun game where users can guess whether a celebrity is dead or alive! This API provides a users, auth, and celebrities routers. Celebrities contains objects with information about celebrities and their deaths (or non-deaths). It contains 109 celebrities and their information, along with endpoints associated with login and registration and saving points to each user.**

(information current as of 08/27/2019, not intended to be used for anything other than entertainment and information is not guaranteed to be accurate)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

You will need to have your favorite package manager ready and navigate in to the root directory of the git.

### Installing

A step by step series of examples that tell you how to get a development env running

Install the dependancies that comes with the repo

```
npm i
```

Start the development local server, this git will use port 3300

```
npm run server
```

## Endpoints

### Auth (unrestricted)

**POST createUser ‘https://bw-celeb-dead-app.herokuapp.com/auth/register’**
Registers new user to 'users' DB
```  
SAMPLE BODY: {
	"name" : "lauraName"
	"username" : "lauraUsername"
	"password" : "lauraPassword"
	"points" : 1000
	}
```

returns: newly registered user object
```
SAMPLE RETURN: {
	"message": "new user lauraUsername has been saved",
	"name": "lauraName",
	"username": "lauraUsername",
	"points": 1000
	}
```

Does not log user in, just registers

**POST loginUser ‘https://bw-celeb-dead-app.herokuapp.com/auth/login’**

Logs in user to 'users' DB
```
SAMPLE BODY: {
	"username" : "lauraUsername"
	"password" : lauraPassword"
	}
```
returns: logged in user information and token
```
SAMPLE RETURN: {
	"message": "Welcome lauraUsername!",
	"name" : "lauraName"
	"points" : 1000
	"token" : "TOKEN0001110101010101..."
}
```
  

### Celebs (unrestricted): 
    
**GET getAllCelebs - ‘https://bw-celeb-dead-app.herokuapp.com/celebs’**

Gets all celebs from 'celebs' DB
returns: array of celebs
```
SAMPLE RETURN:[{
	"id": 1,
	"name": "Peter Fonda",
	"celebImage":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Peter_Fonda_2009.jpg/220px-Peter_Fonda_2009.jpg",
	"isDead": true,
	"dob": "1940-02-23T00:00:00.000Z",
	"dod": "2019-08-16T00:00:00.000Z"
	},
	{
	"id": 2,
	"name": "Jane Fonda",
	"celebImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Jane_Fonda_Cannes_2015.jpg/220px-Jane_Fonda_Cannes_2015.jpg",
	"isDead": false,
	"dob": "1937-12-21T00:00:00.000Z",
	"dod": null
}]
 ``` 

**GET getCelebById - ‘https://bw-celeb-dead-app.herokuapp.com/celebs/:id’**

Gets defined celeb from 'celebs' DB
```
REQUIRES: "id" param
```
returns: one celeb
```
SAMPLE RETURN:{
	"id": 1,
	"name": "Peter Fonda",
	"celebImage":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Peter_Fonda_2009.jpg/220px-Peter_Fonda_2009.jpg",
	"isDead": true,
	"dob": "1940-02-23T00:00:00.000Z",
	"dod": "2019-08-16T00:00:00.000Z"
}
```
  

## Users (restricted => needs token) :

**GET getAllUsers - ‘https://bw-celeb-dead-app.herokuapp.com/users’**

Gets all users from 'users' DB
```
REQUIRES: token
```
returns: array of all users
```
SAMPLE RETURN:[
	{
	"id": 1,
	"name": "fe",
	"username": "fe",
	"points": 1000
	},
	{
	"id": 2,
	"name": "MinniePie",
	"username": "MinniePie",
	"points": 1000
	}
]
```
  

**GET getUserById - ‘https://bw-celeb-dead-app.herokuapp.com/users/:id’**

Gets defined user from 'users' DB
```
REQUIRES:
	token
	"id" param
```
returns: selected user object
```
SAMPLE RETURN: {
	"id": 1,
	"name": "fe",
	"username": "fe",
	"points": 1000
	}
```
  

**PUT addPointsToUser - ‘https://bw-celeb-dead-app.herokuapp.com/users/:id’**

Updates defined user's points
```
REQUIRES:
	token
	"id" param
```
	SAMPLE BODY: {
		"points" : 1000
	}

returns: user's added points

	SAMPLE RETURN: {
		"points" : 1000
	}

  

**DELETE deleteUser - ‘https://bw-celeb-dead-app.herokuapp.com/users/:id’**

Deletes defined user
```
requires:
	token
	"id" param
```
returns: message that user was deleted



## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

This API is optimized to be hosted with  [Heroku]((https://devcenter.heroku.com/)). 

## Built With

* [Knex]((http://knexjs.org/)) - SQL query builder

## Contributing

If you would like to contribute to our project, please feel free. This was created for learning and should be used for learning. If you would like to contribute consider doing any of the following:

	Add more information to Celebrities
	 *career description, gender, age at time of death etc*
	Add more Celebrities
	 *the project is currently limited in length of the celebs array by Heroku*
	
## Authors

* **Laura Daugherty** - *Initial work* - [Laura's Github](https://github.com/laura-daugherty6)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to the help from the Lambda staff and fellow students and their assistance
